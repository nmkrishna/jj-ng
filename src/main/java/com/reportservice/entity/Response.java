package com.reportservice.entity;

import java.util.List;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class Response {
	
	private String status;
	private String message;
	private List<?> body;

}
