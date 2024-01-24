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
	<form action="/books/create" method="post">
		<h1>Add a New Book:</h1>
		<label for="title">Title:</label>
		<input type="text" name="title"/>
		<label for="description">Description:</label>
		<textarea name="description"></textarea>
		<label for="language">Language:</label>
		<input type="text" name="language"/>
		<label for="numberOfPages">Number of Pages:</label>
		<input type="number" name="numberOfPages"/>
		<input type="submit"/>
	</form>
</body>
</html>