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
public class QCStrategyDimension {
	
	private String ourPeople;
	private String trustedPartnerShips;
	private String qualityDifferentiator;
	private String nextGenerationQuality;

}
