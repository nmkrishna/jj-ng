package com.reportservice.entity;

import java.util.List;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
public class FinalProjectDetails {
	
	private String janssenOneAccelerator;
	private String qualityEnabler;
	private String initiative;
	private List<String> strategies;
	private String description;
	private String functionalOwnership;
	private String projectLead;
	private String bamAlignment;
	private String rpaValueScore;
	private String investmentType;
	private String projectManager;
	private String projectScore;
	private String involvedTechnology_system;
	private String resourceRequirement;
	private String potentialRisk;
	private String totalProjectCost;
	private String totalProjectValue;
	private String roi;
	
}
