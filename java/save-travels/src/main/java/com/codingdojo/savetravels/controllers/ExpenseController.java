package com.codingdojo.savetravels.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.codingdojo.savetravels.models.Expense;
import com.codingdojo.savetravels.services.ExpenseService;

import jakarta.validation.Valid;

@Controller
public class ExpenseController {
	@Autowired
	private ExpenseService expenseService;
	
	// index
	@GetMapping("/save-travels")
	public String index(Model model) {
		// giving jsp access to list of all expenses
		List<Expense> expenses = expenseService.allExpenses();
		model.addAttribute("expenses", expenses);
		// creating empty expense so form:form can access getters and setters
		Expense expense = new Expense();
		model.addAttribute("newExpense", expense);
		return "index.jsp";
	}
	
	// creating new expense
	@PostMapping("/save-travels/create")
	public String create(@Valid @ModelAttribute("newExpense") Expense expense, BindingResult result, Model model) 
	{
		if(result.hasErrors()) {
			List<Expense> expenses = expenseService.allExpenses();
			model.addAttribute("expenses", expenses);
			return "index.jsp";
		} else {
			expenseService.createExpense(expense);
			return "redirect:/save-travels";
		}
	}
	// view one expense
	@GetMapping("/save-travels/expense/{expenseID}")
	public String viewOne(Model model, @PathVariable("expenseID") Long expenseID) {
		Expense currentExpense = expenseService.findExpense(expenseID);
		model.addAttribute("currentExpense", currentExpense);
		return "viewOne.jsp";
	}
	// edit expense
	@GetMapping("/save-travels/expense/edit/{expenseID}")
	public String edit(Model model, @PathVariable("expenseID") Long expenseID) {
		Expense currentExpense = expenseService.findExpense(expenseID);
		model.addAttribute("currentExpense", currentExpense);
		return "editExpense.jsp";
	}
	// update expense
	// make sure it's called id! and that nothing in create is called id
	@PutMapping("/save-travels/expense/update/{id}")
	public String update(@Valid @ModelAttribute("currentExpense") Expense expense, BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "editExpense.jsp";
		} else {
			expenseService.updateExpense(expense);
			return "redirect:/save-travels";
		}
	}
	// delete expense
	@DeleteMapping("/save-travels/expense/delete/{id}")
	public String destroy(@PathVariable("id") Long id) {
		expenseService.deleteExpense(id);
		return "redirect:/save-travels";
	}
	
	
}
