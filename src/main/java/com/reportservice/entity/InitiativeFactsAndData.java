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
public class InitiativeFactsAndData {
	
	private String initiativeName;
	private String type;
	private String status;
	private String description;
	private String sponser;
	private String qcLead;
	private String role;
	private String keyStrategicObjectives;
	private String keyMilestones;
	private String nonFinancialKPIs;
	private String financialBenifits;
	private String investment;

}
