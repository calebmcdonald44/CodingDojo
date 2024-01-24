package com.codingdojo.dojosandninjas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.dojosandninjas.models.Dojo;
import com.codingdojo.dojosandninjas.services.DojoService;

import jakarta.validation.Valid;

@Controller
public class DojoController {

	@Autowired
	private DojoService dojoService;
	
	@GetMapping("/dojo/new")
	public String newDojo(Model model) {
		Dojo newDojo = new Dojo();
		model.addAttribute("newDojo", newDojo);
		return "newDojo.jsp";
	}
	
	@PostMapping("/dojo/create")
	public String create(@Valid @ModelAttribute("newDojo") Dojo dojo, BindingResult result, Model model)
	{
		if(result.hasErrors() ) {
			return "newDojo.jsp";
		} else {
			Dojo newDojo = dojoService.createDojo(dojo);
			Long dojoID = newDojo.getId();
			return "redirect:/dojo/" + dojoID;
		}
	}
	
	@GetMapping("/dojo/{dojoID}")
	public String viewDojo(Model model, @PathVariable("dojoID") Long dojoID) {
		Dojo currentDojo = dojoService.findDojo(dojoID);
		model.addAttribute("currentDojo", currentDojo);
		return "oneDojo.jsp";
	}
}

