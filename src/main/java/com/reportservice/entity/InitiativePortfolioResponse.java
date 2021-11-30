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
public class InitiativePortfolioResponse {
	
	private String janssenOneAccelerator;
	private String qualityEnabler;
	private InitiativeFactsAndData initiativeFacts;
	private String businessLevel;
	private Function function;
	private JanssenOneDimension janssenOneDimension;
	private QCStrategyDimension qcStrategyDimension;
	private String subInitiative;
	private String involvedTechnology;
	private RelatedDocuments relatedDocuments;
	private String comments;
	private String keyContactPerson;
	
	
}
