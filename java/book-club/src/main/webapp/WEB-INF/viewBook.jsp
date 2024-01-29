<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Book Club</title>
</head>
<body>
	<h1>${currentBook.title}</h1>
	<h2>${currentBook.user.userName} read ${currentBook.title} by ${currentBook.author}</h2>
	<h2>Here are ${currentBook.user.userName}'s thoughts:</h2>
	<p>${currentBook.thoughts}</p>
	<c:if test="${userID == currentBook.user.id}">
		<a href="/book/edit/${currentBook.id}">Edit</a>
		<form action="/book/delete/${currentBook.id}" method="post">
		    <input type="hidden" name="_method" value="delete">
		    <input type="submit" value="Delete">
		</form>	
	</c:if>
</body>
</html>