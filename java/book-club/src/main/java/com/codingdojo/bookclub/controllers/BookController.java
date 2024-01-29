package com.codingdojo.bookclub.controllers;

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

import com.codingdojo.bookclub.models.Book;
import com.codingdojo.bookclub.services.BookService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class BookController {
	
	@Autowired
	private BookService bookService;
	
	@GetMapping("/welcome")
	public String welcome(HttpSession session, Model model) {
		if(session.getAttribute("userID") == null) {
			return "redirect:/logout";
		}
		List<Book> books = bookService.allBooks();
		model.addAttribute("books", books);
		return "welcome.jsp";
	}
	
	@GetMapping("/book/add")
	public String addBook(HttpSession session, Model model) {
		if(session.getAttribute("userID") == null) {
			return "redirect:/logout";
		}
		Book newBook = new Book();
		model.addAttribute("newBook", newBook);
		return "addBook.jsp";
	}
	@PostMapping("/book/create")
	public String createBook(@Valid @ModelAttribute("newBook") Book book, BindingResult result, Model model, HttpSession session) {
		if(session.getAttribute("userID") == null) {
			return "redirect:/logout";
		}
		if(result.hasErrors()) {
			return "addBook.jsp";
		} else {
			bookService.createBook(book);
			return "redirect:/welcome";
		}
	}
	@GetMapping("/book/view/{bookID}")
	public String viewOne(HttpSession session, Model model, @PathVariable("bookID") Long bookID) {
		if(session.getAttribute("userID") == null) {
			return "redirect:/logout";
		}
		Book currentBook = bookService.findBook(bookID);
		model.addAttribute("currentBook", currentBook);
		return "viewBook.jsp";
	}
	@GetMapping("book/edit/{bookID}")
	public String edit(HttpSession session, Model model, @PathVariable("bookID") Long bookID) {
		if(session.getAttribute("userID") == null) {
			return "redirect:/logout";
		}
		Book currentBook = bookService.findBook(bookID);
		model.addAttribute("currentBook", currentBook);
		return "editBook.jsp";
	}
	
	// make sure it's called id! and that nothing in create is called id
	@PutMapping("/book/update/{id}")
	public String update(@Valid @ModelAttribute("currentBook") Book book, BindingResult result, Model model, HttpSession session) {
		if(session.getAttribute("userID") == null) {
			return "redirect:/logout";
		}
		if(result.hasErrors()) {
			return "editBook.jsp";
		} else {
			bookService.updateBook(book);
			return "redirect:/welcome";
		}
	}
	@DeleteMapping("/book/delete/{id}")
	public String destroy(@PathVariable("id") Long id, HttpSession session) {
		if(session.getAttribute("userID") == null) {
			return "redirect:/logout";
		}
		bookService.deleteBook(id);
		return "redirect:/welcome";
	}
	
}
