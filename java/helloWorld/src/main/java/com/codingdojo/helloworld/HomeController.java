package com.codingdojo.helloworld;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	@RequestMapping("/")
	public String index(@RequestParam(value="q", required=false) String searchQuery) {
		return "You searched for " + searchQuery;
	}
	@RequestMapping("/m/{courseId}/{moduleId}")
	public String pathVariables(@PathVariable("courseId") String courseId, @PathVariable("moduleId") String moduleId) {
		return "Course ID: " + courseId + " Module ID: " + moduleId;
	}
	
	@RequestMapping("/hello_world")
	public String world() {
		return "Hello World!";
	}
}
