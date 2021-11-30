package com.reportservice.springbootawss3.controller;

import org.json.simple.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.reportservice.entity.ChartResponse;
import com.reportservice.entity.FinalProjectDetails;
import com.reportservice.entity.Response;
import com.reportservice.springbootawss3.service.ReportsService;

import java.io.ByteArrayOutputStream;
import java.util.List;

@RestController
@RequestMapping(value = "/reports")
public class ReportsController {
    @Autowired
    ReportsService reportsService;

    @GetMapping("/list/files")
    public ResponseEntity<List<String>> getListOfFiles() {
        return new ResponseEntity<>(reportsService.listFiles(), HttpStatus.OK);
    }

    @PostMapping("/file/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("fileName") String fileName,
                                             @RequestParam("file") MultipartFile file) {
        return new ResponseEntity<>(reportsService.uploadFile(fileName, file), HttpStatus.OK);
    }

    @GetMapping(value = "/download/{filename}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable String filename) {
        ByteArrayOutputStream downloadInputStream = reportsService.downloadFile(filename);

        return ResponseEntity.ok()
                .contentType(contentType(filename))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                .body(downloadInputStream.toByteArray());
    }
    
    @GetMapping(value = "/prepare/charts/{filename}")
    public ResponseEntity<?> prepareChartsJson(@PathVariable String filename) {
    	ChartResponse response = null;
    	try {
    		response = reportsService.prepareChartsJsonFromS3(filename);
			return ResponseEntity.status(200).body(response);
		} catch (Exception e) {
			e.printStackTrace();
		}
        return ResponseEntity.status(400).body("Issue while preparing chart reponse..!");
    }
    
    
    @GetMapping(value = "/prepare/chart/mock")
    public ResponseEntity<?> prepareChartsJsonMock() {
    	JSONArray response = null;
    	try {
    		response = reportsService.prepareChartsJsonFromMock();
			return ResponseEntity.status(200).body(response);
		} catch (Exception e) {
			e.printStackTrace();
		}
        return ResponseEntity.status(400).body("Issue while preparing chart reponse..!");
    }
    
    
    @GetMapping(value = "/prepare/johnson/chart/{filename}")
    public ResponseEntity<?> prepareChartsJhonsonJson(@PathVariable String filename) {
    	Response response = null;
    	try {
    		response = reportsService.prepareJhonsonChartJson(filename);
			return ResponseEntity.status(200).body(response);
		} catch (Exception e) {
			e.printStackTrace();
		}
        return ResponseEntity.status(400).body("Issue while preparing johnson chart reponse..!");
    }
    
    @GetMapping(value = "/prepare/johnson/portfolioJson")
    public ResponseEntity<?> prepareInitiativePortfolioJson() {
    	Response response = null;
    	try {
    		response = reportsService.prepareInitiativePortfolioJson();
			return ResponseEntity.status(200).body(response);
		} catch (Exception e) {
			e.printStackTrace();
		}
        return ResponseEntity.status(400).body("Issue while preparing johnson portfolio chart reponse..!");
    }
    
    
    

    @GetMapping(value = "/delete/{filename}")
    public ResponseEntity<String> deleteFile(@PathVariable("filename") String filename) {
        return new ResponseEntity<>(reportsService.deleteFile(filename), HttpStatus.OK);
    }
    
    
    
    

    private MediaType contentType(String filename) {
        String[] fileArrSplit = filename.split("\\.");
        String fileExtension = fileArrSplit[fileArrSplit.length - 1];
        switch (fileExtension) {
            case "txt":
                return MediaType.TEXT_PLAIN;
            case "png":
                return MediaType.IMAGE_PNG;
            case "jpg":
                return MediaType.IMAGE_JPEG;
            default:
                return MediaType.APPLICATION_OCTET_STREAM;
        }
    }
}
