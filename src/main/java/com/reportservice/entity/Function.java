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
public class Function {
	
	private String bq;
	private String pqm;
	private String brqc;
	private String jscq;
	private String pqs;

}
