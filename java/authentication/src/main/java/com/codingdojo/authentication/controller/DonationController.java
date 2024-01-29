package com.codingdojo.authentication.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpSession;

@Controller
public class DonationController {
	// service
	@GetMapping("/donations")
	public String donationDashboard(HttpSession session) {
		if(session.getAttribute("userID") == null) {
			return "redirect:/logout";
		}
		return "donationDashboard.jsp";
	}
}
