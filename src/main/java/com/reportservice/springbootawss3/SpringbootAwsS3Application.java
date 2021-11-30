package com.reportservice.springbootawss3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.reportservice"})
public class SpringbootAwsS3Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootAwsS3Application.class, args);
	}

}
