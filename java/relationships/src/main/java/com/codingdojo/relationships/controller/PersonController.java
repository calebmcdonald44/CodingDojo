package com.codingdojo.relationships.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.codingdojo.relationships.models.Person;
import com.codingdojo.relationships.services.RelationshipService;

@Controller
public class PersonController {

		@Autowired
		private RelationshipService relationshipService;
		
		@GetMapping("/person/{person_id}")
		public String showPerson(@PathVariable Long person_id, Model model) {
		    
		    Person someAwesomePerson = relationshipService.findPerson(person_id);
		    model.addAttribute("person", someAwesomePerson);
		    
		    return "showPerson.jsp";
		}
		
		@GetMapping("/persons")
		public String showPersons(Model model) {
			List<Person> somePersons = relationshipService.allPersons();
			model.addAttribute("persons", somePersons);
			
			return "showPerson.jsp";
		}
}
