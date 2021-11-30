package com.reportservice.util;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;

@Component
public class JJMockUtil {
	
	@Autowired
	private ResourceLoader resourceLoader;

	public JSONArray getMockJson() {

		// JSON parser object to parse read file
		JSONParser jsonParser = new JSONParser();
		final Resource fileResource = resourceLoader.getResource("classpath:jj_mock.json");
		try {
			// Read JSON file
			Object obj = jsonParser.parse(new InputStreamReader(fileResource.getInputStream(), "UTF-8"));
			JSONArray jjmockdata = (JSONArray) obj;
			System.out.println(jjmockdata);
			return jjmockdata;
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return null;
	}

}
