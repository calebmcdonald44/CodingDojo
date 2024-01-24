<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Books</title>
</head>
<body>
	<h1>Here's the book:</h1>
	<h2>${book.title}</h2>
	<p>${book.description}</p>
	<p>${book.language}</p>
	<p>${book.numberOfPages}</p>
	<a href="/books/${book.id}/edit">Edit</a>
</body>
</html>