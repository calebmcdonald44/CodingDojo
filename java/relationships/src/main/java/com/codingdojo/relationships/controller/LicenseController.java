package com.codingdojo.relationships.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.relationships.models.License;
import com.codingdojo.relationships.models.Person;
import com.codingdojo.relationships.services.RelationshipService;

import jakarta.validation.Valid;


@Controller
public class LicenseController {
	
	@Autowired
	private RelationshipService relationshipService;
	
	@PostMapping("/licenses")
	public String licenses(@Valid @ModelAttribute("license") License license) {
	    // error handling with binding result omitted    
	    relationshipService.createLicense(license); // Already has the person!
	        
	    return "redirect:/persons";
	}
	
//	@PostMapping("/person/create")
//	public String createPerson(@Valid @ModelAttribute("newPerson") Person person, BindingResult result, Model model)
//	{
//		if(result.hasErrors()) {
//			List<Person> persons = relationshipService.allPersons();
//			model.addAttribute("persons", persons);
//			return "showPerson.jsp";
//		} else {
//			relationshipService.createPerson(person);
//			return "redirect:/person/1";
//		}
//	}
//	
//	@GetMapping("/persons")
//	public String showPersons(Model model) {
//		List<Person> somePersons = relationshipService.allPersons();
//		model.addAttribute("persons", somePersons);
//		
//		return "showPerson.jsp";
//	}
}
