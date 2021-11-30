package com.reportservice.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Builder
public class SampleJsonObject {
	
	private double id;
	private String firstName;
	private String lastName;
	private String gender;
	private String country;
	private double age;
	private String date;
	private double number;
	

}
