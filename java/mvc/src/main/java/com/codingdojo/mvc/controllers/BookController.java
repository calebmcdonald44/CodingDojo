package com.codingdojo.mvc.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import com.codingdojo.mvc.models.Book;
import com.codingdojo.mvc.services.BookService;

import jakarta.validation.Valid;

@Controller
public class BookController {
	
	@Autowired
	BookService bookService;

	@GetMapping("/books/{bookID}")
	public String index(Model model, @PathVariable("bookID") Long bookID) {
		
		System.out.println(bookID);
		Book book = bookService.findBook(bookID);
		System.out.println(book);
		
		model.addAttribute("book", book);
		
		return "index.jsp";
	}
	@GetMapping("/books")
    public String allBooks(Model model) {
        List<Book> books = bookService.allBooks();
        model.addAttribute("books", books);
        return "allBooks.jsp";
    }
	@GetMapping("/books/{bookID}/edit")
	public String editBook(Model model, @PathVariable("bookID") Long bookID) {
		Book book = bookService.findBook(bookID);
		model.addAttribute("book", book);
		return "editBook.jsp";
	}
	
	// make sure it's called id! and that nothing in create is called id
    @PutMapping(value="/books/{id}/update")
    public String update(@Valid @ModelAttribute("book") Book book, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("book", book);
            return "editBook.jsp";
        } else {
            bookService.updateBook(book);
            return "redirect:/books";
        }
    }
    @DeleteMapping("/books/{id}/delete")
    public String destroy(@PathVariable("id") Long id) {
        bookService.deleteBook(id);
        return "redirect:/books";
    }
    
    @GetMapping("books/new")
    public String newBook() {
    	return "booksNew.jsp";
    }
    
    @PostMapping("/books/create")
    public String create(
        @RequestParam("title") String title,
        @RequestParam("description") String description,
        @RequestParam("language") String language,
        @RequestParam("numberOfPages") Integer numberOfPages) 
    {
        // CODE TO MAKE A NEW BOOK AND SAVE TO THE DB
        Book book = new Book(title, description, language, numberOfPages);
        bookService.createBook(book);
        return "redirect:/books";
    }
}
