package com.reportservice.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.reportservice.entity.ChartResponse;
import com.reportservice.entity.ReportObject;
import com.reportservice.entity.SampleJsonObject;

public class ExcelUtil {

	public static ChartResponse prepareSheetObject(InputStream inputStream) throws IOException {

		List<String> headersArray = new ArrayList<>();
		List<SampleJsonObject> dataArray = new ArrayList<>();
		
		// Finds the workbook instance for XLSX file
		XSSFWorkbook myWorkBook = new XSSFWorkbook(inputStream);
		// Return first sheet from the XLSX workbook
		XSSFSheet mySheet = myWorkBook.getSheetAt(0);
		// Get iterator to all the rows in current sheet
		Iterator<Row> rowIterator = mySheet.iterator();
		// Traversing over each row of XLSX file
		headersArray = getHeadersArray(rowIterator.next());
		
		while (rowIterator.hasNext()) {
			Row row = rowIterator.next();
			if(row != null) {
				SampleJsonObject jsonObject = prepareJsonObjectForThisRow(row);
				dataArray.add(jsonObject);
			}
		}
		ReportObject reportObject= ReportObject.builder().dataArray(dataArray).headerArray(headersArray).build();
		return ChartResponse.builder().status("SUCCESS").body(reportObject).message("Successfully formated excel data to JSON..!").build();
	}
	
	
	private static SampleJsonObject prepareJsonObjectForThisRow(Row row) {
		SampleJsonObject json = SampleJsonObject.builder().id(row.getCell(0) != null ? row.getCell(0).getNumericCellValue() : 0)
				.firstName(row.getCell(1) != null ? row.getCell(1).getStringCellValue() : "")
				.lastName(row.getCell(2) != null ? row.getCell(2).getStringCellValue() : "")
				.gender(row.getCell(3) != null ? row.getCell(3).getStringCellValue() : "")
				.country(row.getCell(4) != null ? row.getCell(4).getStringCellValue() : "")
				.age(row.getCell(5) != null ? row.getCell(5).getNumericCellValue() : 0)
				.date(row.getCell(6) != null ? row.getCell(6).getStringCellValue() : "")
				.number(row.getCell(7) != null ? row.getCell(7).getNumericCellValue() : 0)
				.build();
		return json;
	}


	public static List<String> getHeadersArray(Row headerRow) {
		List<String> headerArray = new ArrayList<>();
		Iterator<Cell> cellIterator = headerRow.cellIterator();
		while (cellIterator.hasNext()) {
			Cell cell = cellIterator.next();
			if(cell != null) {
				headerArray.add(cell.getStringCellValue());
			}
		}
		return headerArray;
	}
	
	public static XSSFSheet getJohnchartSheetFromFile(InputStream inputStream) throws IOException {
		// Finds the workbook instance for XLSX file
		XSSFWorkbook myWorkBook = new XSSFWorkbook(inputStream);
		// Return first sheet from the XLSX workbook
		XSSFSheet excelSheet = myWorkBook.getSheetAt(0);
		return excelSheet;
	}
	
	public static XSSFSheet getInitiativePortfolioSheetFromFile(InputStream inputStream) throws IOException {
		// Finds the workbook instance for XLSX file
		XSSFWorkbook myWorkBook = new XSSFWorkbook(inputStream);
		// Return first sheet from the XLSX workbook
		XSSFSheet excelSheet = myWorkBook.getSheetAt(1);
		return excelSheet;
	}
	
	public static boolean checkIfRowIsEmpty(Row row) {
	    if (row == null) {
	        return true;
	    }
	    if (row.getLastCellNum() <= 0) {
	        return true;
	    }
	    for (int cellNum = row.getFirstCellNum(); cellNum < row.getLastCellNum(); cellNum++) {
	        Cell cell = row.getCell(cellNum);
	        if (cell != null && cell.getCellType() != Cell.CELL_TYPE_BLANK && StringUtils.isNotBlank(cell.toString())) {
	            return false;
	        }
	    }
	    return true;
	}

}
