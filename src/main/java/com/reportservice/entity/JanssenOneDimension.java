package com.reportservice.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class JanssenOneDimension {
	
	private String selectForSuccess;
	private String designForAccess;
	private String driveTheDebate;
	private String analyzeAndDisrupt;
	private String completeForPatients;

}
