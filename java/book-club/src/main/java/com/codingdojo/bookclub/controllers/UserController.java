package com.codingdojo.bookclub.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.bookclub.models.LoginUser;
import com.codingdojo.bookclub.models.User;
import com.codingdojo.bookclub.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class UserController {

   @Autowired
   private UserService userService;
   
   @GetMapping("/")
   public String index(Model model) {
   
       model.addAttribute("newUser", new User());
       model.addAttribute("newLogin", new LoginUser());
       return "login.jsp";
   }
   
   @PostMapping("/register")
   public String register(@Valid @ModelAttribute("newUser") User newUser, 
           BindingResult result, Model model, HttpSession session) {

       User registeredUser = userService.register(newUser, result);
       if(result.hasErrors()) {
  
           model.addAttribute("newLogin", new LoginUser());
           return "login.jsp";
       } else {
       	session.setAttribute("userID", registeredUser.getId());
       	session.setAttribute("userName", registeredUser.getUserName());
       	return "redirect:/welcome";
       }
   }
   
   @PostMapping("/login")
   public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
           BindingResult result, Model model, HttpSession session) {
       
   User loggedUser = userService.login(newLogin, result);
       if(result.hasErrors()) {
           model.addAttribute("newUser", new User());
           return "login.jsp";
       } else {
       	session.setAttribute("userID", loggedUser.getId());
       	session.setAttribute("userName", loggedUser.getUserName());

       	return "redirect:/welcome";
       }
   }
   
   @GetMapping("/logout")
   public String logout(HttpSession session) {
   	session.invalidate();
   	return "redirect:/";
   }
}
