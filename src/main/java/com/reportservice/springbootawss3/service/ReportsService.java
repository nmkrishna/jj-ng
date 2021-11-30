package com.reportservice.springbootawss3.service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.json.simple.JSONArray;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.ListObjectsRequest;
import com.amazonaws.services.s3.model.ObjectListing;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectSummary;
import com.reportservice.entity.ChartResponse;
import com.reportservice.entity.FinalProjectDetails;
import com.reportservice.entity.Function;
import com.reportservice.entity.InitiativeFactsAndData;
import com.reportservice.entity.InitiativePortfolioResponse;
import com.reportservice.entity.JanssenOneDimension;
import com.reportservice.entity.QCStrategyDimension;
import com.reportservice.entity.RelatedDocuments;
import com.reportservice.entity.Response;
import com.reportservice.util.AmazonS3Util;
import com.reportservice.util.Constants;
import com.reportservice.util.ExcelUtil;
import com.reportservice.util.JJMockUtil;

@Service
public class ReportsService {

    private Logger logger = LoggerFactory.getLogger(ReportsService.class);
    
    @Autowired
    private AmazonS3Util amazonS3Util;
    
    @Autowired
    JJMockUtil mockUtil;
    
    @Value("${application.bucket.name}")
    private String bucketName;

    /**
     * Upload file into AWS S3
     *
     * @param keyName
     * @param file
     * @return String
     */
    public String uploadFile(String keyName, MultipartFile file) {
    	AmazonS3 amazonS3Client = amazonS3Util.s3client();
        try {
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentLength(file.getSize());
            amazonS3Client.putObject(bucketName, keyName, file.getInputStream(), metadata);
            return "File uploaded: " + keyName;
        } catch (IOException ioe) {
            logger.error("IOException: " + ioe.getMessage());
        } catch (AmazonServiceException serviceException) {
            logger.info("AmazonServiceException: "+ serviceException.getMessage());
            throw serviceException;
        } catch (AmazonClientException clientException) {
            logger.info("AmazonClientException Message: " + clientException.getMessage());
            throw clientException;
        }
        return "File not uploaded: " + keyName;
    }

    /**
     * Deletes file from AWS S3 bucket
     *
     * @param fileName
     * @return
     */
    public String deleteFile(final String fileName) {
    	AmazonS3 amazonS3Client = amazonS3Util.s3client();
        amazonS3Client.deleteObject(bucketName, fileName);
        return "Deleted File: " + fileName;
    }


    /**
     * Downloads file using amazon S3 client from S3 bucket
     *
     * @param keyName
     * @return ByteArrayOutputStream
     */
    public ByteArrayOutputStream downloadFile(String keyName) {
    	AmazonS3 amazonS3Client = amazonS3Util.s3client();
        try {
            S3Object s3object = amazonS3Client.getObject(new GetObjectRequest(bucketName, keyName));

            InputStream is = s3object.getObjectContent();
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            int len;
            byte[] buffer = new byte[4096];
            while ((len = is.read(buffer, 0, buffer.length)) != -1) {
                outputStream.write(buffer, 0, len);
            }

            return outputStream;
        } catch (IOException ioException) {
            logger.error("IOException: " + ioException.getMessage());
        } catch (AmazonServiceException serviceException) {
            logger.info("AmazonServiceException Message:    " + serviceException.getMessage());
            throw serviceException;
        } catch (AmazonClientException clientException) {
            logger.info("AmazonClientException Message: " + clientException.getMessage());
            throw clientException;
        }

        return null;
    }
    

    /**
     * Get all files from S3 bucket
     *
     * @return
     */
    public List<String> listFiles() {

    	AmazonS3 amazonS3Client = amazonS3Util.s3client();
        ListObjectsRequest listObjectsRequest =
                new ListObjectsRequest()
                        .withBucketName(bucketName);

        List<String> keys = new ArrayList<>();

        ObjectListing objects = amazonS3Client.listObjects(listObjectsRequest);

        while (true) {
            List<S3ObjectSummary> objectSummaries = objects.getObjectSummaries();
            if (objectSummaries.size() < 1) {
                break;
            }

            for (S3ObjectSummary item : objectSummaries) {
                if (!item.getKey().endsWith("/"))
                    keys.add(item.getKey());
            }

            objects = amazonS3Client.listNextBatchOfObjects(objects);
        }

        return keys;
    }

	public ChartResponse prepareChartsJsonFromS3(String filename) {
		try {
			InputStream is = amazonS3Util.getFileInputStreamFromS3(filename);
			ChartResponse response = ExcelUtil.prepareSheetObject(is);
			is.close();
			return response;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public JSONArray prepareChartsJsonFromMock() {
		return mockUtil.getMockJson();
	}

	public Response prepareJhonsonChartJson(String filename) {
		try {
			List<FinalProjectDetails> finalProjectDetailList = new ArrayList<FinalProjectDetails>();
			InputStream inputStream = amazonS3Util.getFileInputStreamFromS3(filename);
			XSSFSheet sheet = ExcelUtil.getJohnchartSheetFromFile(inputStream);
			Iterator<Row> rowIterator = sheet.iterator();
			//skip header1 row
			rowIterator.next();
			//skip header1 row
			rowIterator.next();
			String qualityEnabler = "";
			String janssenOneAccelerator = "";
			while (rowIterator.hasNext()) {
				FinalProjectDetails projectDetails = FinalProjectDetails.builder().build();
				Row rowData = rowIterator.next();
				qualityEnabler = (rowData.getCell(2) != null && rowData.getCell(2).getStringCellValue() != null && !StringUtils.isEmpty(rowData.getCell(2).getStringCellValue())) ? rowData.getCell(2).getStringCellValue() : qualityEnabler;
				janssenOneAccelerator = (rowData.getCell(1) != null && rowData.getCell(1).getStringCellValue() != null && !StringUtils.isEmpty(rowData.getCell(1).getStringCellValue())) ? rowData.getCell(1).getStringCellValue() : janssenOneAccelerator;
				prepareProjectDetailObject(projectDetails, rowData, qualityEnabler, janssenOneAccelerator);
				finalProjectDetailList.add(projectDetails);
			}
			inputStream.close();
			return Response.builder().status("SUCCESS").message("sucessfully formatted json..!").body(finalProjectDetailList).build();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Response.builder().status("FAILED").message("Failed to format the json..!").body(null).build();
	}

	private void prepareProjectDetailObject(FinalProjectDetails projectDetails, Row rowData, String qualityEnabler, String janssenOneAccelerator) {
		List<String> stratagies = getStratagiesList(rowData);
		projectDetails.setQualityEnabler(qualityEnabler);
		projectDetails.setStrategies(stratagies);
		projectDetails.setJanssenOneAccelerator(janssenOneAccelerator);
		projectDetails.setInitiative(rowData.getCell(3) != null ? rowData.getCell(3).getStringCellValue() : "");
		projectDetails.setDescription(prepareDescription(rowData));
		projectDetails.setFunctionalOwnership(rowData.getCell(13) != null ? rowData.getCell(13).getStringCellValue() : "");
		projectDetails.setBamAlignment(rowData.getCell(14) != null ? rowData.getCell(14).getStringCellValue() : "");
		projectDetails.setRpaValueScore(rowData.getCell(15) != null ? rowData.getCell(15).getStringCellValue() : "");
		projectDetails.setInvestmentType(rowData.getCell(16) != null ? rowData.getCell(16).getStringCellValue() : "");
		projectDetails.setProjectManager(rowData.getCell(17) != null ? rowData.getCell(17).getStringCellValue() : "");
		projectDetails.setProjectLead(rowData.getCell(18) != null ? rowData.getCell(18).getStringCellValue() : "");
		projectDetails.setInvolvedTechnology_system(rowData.getCell(19) != null ? rowData.getCell(19).getStringCellValue() : "");
		projectDetails.setResourceRequirement(rowData.getCell(20) != null ? rowData.getCell(20).getStringCellValue() : "");
		projectDetails.setPotentialRisk(rowData.getCell(21) != null ? rowData.getCell(21).getStringCellValue() : "");
		projectDetails.setTotalProjectCost(rowData.getCell(22) != null ? rowData.getCell(22).getStringCellValue() : "");
		projectDetails.setTotalProjectValue(rowData.getCell(23) != null ? rowData.getCell(23).getStringCellValue() : "");
		projectDetails.setRoi(rowData.getCell(24) != null ? rowData.getCell(24).getStringCellValue() : "");
		
	}

	private String prepareDescription(Row rowData) {
		Cell descriptionCell = rowData.getCell(12);
		descriptionCell.setCellType(1);
		return String.valueOf(descriptionCell != null ? descriptionCell.getStringCellValue() : "");
	}

	private List<String> getStratagiesList(Row rowData) {
		List<String> stratagies = new ArrayList<String>();
		for (int i = 4; i < 12; i++) {
			if(rowData.getCell(i) != null && !StringUtils.isEmpty(rowData.getCell(i).getStringCellValue())) {
				stratagies.add(Constants.STRATAGIES.get(i));
			}
		}
		return stratagies;
	}
	
	public Response prepareInitiativePortfolioJson() {
			try {
				List<InitiativePortfolioResponse> initiativePortfolioList = new ArrayList<InitiativePortfolioResponse>();
				InputStream inputStream = amazonS3Util.getFileInputStreamFromS3("Combined-Transformation Roadmap for Verification-Outline.xlsx");
				XSSFSheet sheet = ExcelUtil.getInitiativePortfolioSheetFromFile(inputStream);
				Iterator<Row> rowIterator = sheet.iterator();
				//skip header1 row
				rowIterator.next();
				//skip header2 row
				rowIterator.next();
				//skip header3 row
				rowIterator.next();
				String qualityEnabler = "";
				String janssenOneAccelerator = "";
				while (rowIterator.hasNext()) {
					InitiativePortfolioResponse portfolioResponse = InitiativePortfolioResponse.builder().build();
					Row rowData = rowIterator.next();
					if(!ExcelUtil.checkIfRowIsEmpty(rowData)) {
						qualityEnabler = (rowData.getCell(2) != null && rowData.getCell(2).getStringCellValue() != null && !StringUtils.isEmpty(rowData.getCell(2).getStringCellValue())) ? rowData.getCell(2).getStringCellValue() : qualityEnabler;
						janssenOneAccelerator = (rowData.getCell(1) != null && rowData.getCell(1).getStringCellValue() != null && !StringUtils.isEmpty(rowData.getCell(1).getStringCellValue())) ? rowData.getCell(1).getStringCellValue() : janssenOneAccelerator;
						prepareInitiativePortfolioResponse(portfolioResponse, rowData, qualityEnabler, janssenOneAccelerator);
						initiativePortfolioList.add(portfolioResponse);
					}
				}
				inputStream.close();
				return Response.builder().status("SUCCESS").message("sucessfully formatted json..!").body(initiativePortfolioList).build();
			} catch (Exception e) {
				e.printStackTrace();
			}
			return Response.builder().status("FAILED").message("Failed to format the json..!").body(null).build();
		}

	private void prepareInitiativePortfolioResponse(InitiativePortfolioResponse portfolioDetails, Row rowData,
			String qualityEnabler, String janssenOneAccelerator) {
		portfolioDetails.setJanssenOneAccelerator(janssenOneAccelerator);
		portfolioDetails.setQualityEnabler(qualityEnabler);
		portfolioDetails.setBusinessLevel(rowData.getCell(16) != null ? rowData.getCell(16).getStringCellValue() : "");
		portfolioDetails.setKeyContactPerson(rowData.getCell(38) != null ? rowData.getCell(38).getStringCellValue() : "");
		portfolioDetails.setSubInitiative(rowData.getCell(31) != null ? rowData.getCell(31).getStringCellValue() : "");
		portfolioDetails.setInvolvedTechnology(rowData.getCell(32) != null ? rowData.getCell(32).getStringCellValue() : "");
		portfolioDetails.setComments(rowData.getCell(37) != null ? rowData.getCell(37).getStringCellValue() : "");
		portfolioDetails.setInitiativeFacts(prepareInitiativeFactsFromRow(rowData));
		portfolioDetails.setFunction(prepareFunctions(rowData));
		portfolioDetails.setJanssenOneDimension(prepareJanssenOneDimension(rowData));
		portfolioDetails.setQcStrategyDimension(prepareQCStrategyDimension(rowData));
		portfolioDetails.setRelatedDocuments(prepareRelatedDocuments(rowData));
		
	}

	private RelatedDocuments prepareRelatedDocuments(Row rowData) {
		RelatedDocuments relatedDocuments = RelatedDocuments.builder().build();
		relatedDocuments.setTitle(rowData.getCell(33) != null ? rowData.getCell(33).getStringCellValue() : "");
		relatedDocuments.setFormat(rowData.getCell(34) != null ? rowData.getCell(34).getStringCellValue() : "");
		Cell dateCell = rowData.getCell(35);
		if(dateCell != null) {
			dateCell.setCellType(1);
		}
		relatedDocuments.setDate(dateCell != null ? dateCell.getStringCellValue() : "");
		relatedDocuments.setLocationLink(rowData.getCell(36) != null ? rowData.getCell(36).getStringCellValue() : "");
		return relatedDocuments;
	}

	private QCStrategyDimension prepareQCStrategyDimension(Row rowData) {
		QCStrategyDimension qcStrategyDimension = QCStrategyDimension.builder().build();
		qcStrategyDimension.setOurPeople(rowData.getCell(27) != null ? rowData.getCell(27).getStringCellValue() : "");
		qcStrategyDimension.setTrustedPartnerShips(rowData.getCell(28) != null ? rowData.getCell(28).getStringCellValue() : "");
		qcStrategyDimension.setQualityDifferentiator(rowData.getCell(29) != null ? rowData.getCell(29).getStringCellValue() : "");
		qcStrategyDimension.setNextGenerationQuality(rowData.getCell(30) != null ? rowData.getCell(30).getStringCellValue() : "");
		return qcStrategyDimension;
	}

	private JanssenOneDimension prepareJanssenOneDimension(Row rowData) {
		JanssenOneDimension janssenOneDimension = JanssenOneDimension.builder().build();
		janssenOneDimension.setSelectForSuccess(rowData.getCell(22) != null ? rowData.getCell(22).getStringCellValue() : "");
		janssenOneDimension.setDesignForAccess(rowData.getCell(23) != null ? rowData.getCell(23).getStringCellValue() : "");
		janssenOneDimension.setDriveTheDebate(rowData.getCell(24) != null ? rowData.getCell(24).getStringCellValue() : "");
		janssenOneDimension.setAnalyzeAndDisrupt(rowData.getCell(25) != null ? rowData.getCell(25).getStringCellValue() : "");
		janssenOneDimension.setCompleteForPatients(rowData.getCell(26) != null ? rowData.getCell(26).getStringCellValue() : "");
		return janssenOneDimension;
	}

	private Function prepareFunctions(Row rowData) {
		Function function = Function.builder().build();
		function.setBq(rowData.getCell(17) != null ? rowData.getCell(17).getStringCellValue() : "");
		function.setPqm(rowData.getCell(18) != null ? rowData.getCell(18).getStringCellValue() : "");
		function.setBrqc(rowData.getCell(19) != null ? rowData.getCell(19).getStringCellValue() : "");
		function.setJscq(rowData.getCell(20) != null ? rowData.getCell(20).getStringCellValue() : "");
		function.setPqs(rowData.getCell(21) != null ? rowData.getCell(21).getStringCellValue() : "");
		return function;
	}

	private InitiativeFactsAndData prepareInitiativeFactsFromRow(Row rowData) {
		InitiativeFactsAndData initiativeFactsAndData = InitiativeFactsAndData.builder().build();
		initiativeFactsAndData.setInitiativeName(rowData.getCell(4) != null ? rowData.getCell(4).getStringCellValue() : "");
		initiativeFactsAndData.setType(rowData.getCell(5) != null ? rowData.getCell(5).getStringCellValue() : "");
		initiativeFactsAndData.setStatus(rowData.getCell(6) != null ? rowData.getCell(6).getStringCellValue() : "");
		initiativeFactsAndData.setDescription(rowData.getCell(7) != null ? rowData.getCell(7).getStringCellValue() : "");
		initiativeFactsAndData.setSponser(rowData.getCell(8) != null ? rowData.getCell(8).getStringCellValue() : "");
		initiativeFactsAndData.setQcLead(rowData.getCell(9) != null ? rowData.getCell(9).getStringCellValue() : "");
		initiativeFactsAndData.setRole(rowData.getCell(10) != null ? rowData.getCell(10).getStringCellValue() : "");
		initiativeFactsAndData.setKeyStrategicObjectives(rowData.getCell(11) != null ? rowData.getCell(11).getStringCellValue() : "");
		initiativeFactsAndData.setKeyMilestones(rowData.getCell(12) != null ? rowData.getCell(12).getStringCellValue() : "");
		initiativeFactsAndData.setNonFinancialKPIs(rowData.getCell(13) != null ? rowData.getCell(13).getStringCellValue() : "");
		initiativeFactsAndData.setFinancialBenifits(rowData.getCell(14) != null ? rowData.getCell(14).getStringCellValue() : "");
		initiativeFactsAndData.setInvestment(rowData.getCell(15) != null ? rowData.getCell(15).getStringCellValue() : "");
		return initiativeFactsAndData;
	}

}
