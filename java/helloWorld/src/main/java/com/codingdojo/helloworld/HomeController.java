package com.codingdojo.helloworld;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import jakarta.servlet.http.HttpSession;

import org.springframework.ui.Model;

@Controller
public class HomeController {
	@RequestMapping("/")
	public String index(Model model) {
		model.addAttribute("name", "Sarah");
		return "NewJSP.jsp";
	}
	
	@RequestMapping("/session")
	public String session(HttpSession session) {
		session.setAttribute("count", 0);
		return "NewJSP.jsp";
	}
	@RequestMapping("/session-add")
	public String sessionAdd(HttpSession session) {
		Integer counter = (Integer) session.getAttribute("count");
		counter += 1;
		session.setAttribute("count", counter);
		return "NewJSP.jsp";
	}
	
//	public String index(@RequestParam(value="q", required=false) String searchQuery) {
//		return "You searched for " + searchQuery;
//	}
	@RequestMapping("/m/{courseId}/{moduleId}")
	public String pathVariables(@PathVariable("courseId") String courseId, @PathVariable("moduleId") String moduleId) {
		return "Course ID: " + courseId + " Module ID: " + moduleId;
	}
	
	@RequestMapping("/hello_world")
	public String world() {
		return "Hello World!";
	}
	
	@RequestMapping("/form")
	public String form() {
		return "form.jsp";
	}
	@RequestMapping("/login")
	public String login(
			@RequestParam(value="email") String email,
			@RequestParam(value="password") String password,
			HttpSession session,
			RedirectAttributes redirectAttributes
			) {
		if(password.length()<5) {
			redirectAttributes.addFlashAttribute("error", "The password must be at least 5 characters.");
			return "redirect:/form";
		}
		session.setAttribute("email", email);
		return "redirect:/home";
	}
	@RequestMapping("/home")
	public String home() {
		return "login.jsp";
	}
}
