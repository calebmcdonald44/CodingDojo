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
	<h1>Add a Book to Your Shelf!</h1>
	<form:form action="/book/create" method="post" modelAttribute="newBook">
		<div>
			<form:label path="title">Title:</form:label>
			<form:errors path="title"></form:errors>
			<form:input path="title"></form:input>
		</div>
		<div>
			<form:label path="author">Author:</form:label>
			<form:errors path="author"></form:errors>
			<form:input path="author"></form:input>
		</div>
		<div>
			<form:label path="thoughts">Thoughts:</form:label>
			<form:errors path="thoughts"></form:errors>
			<form:input path="thoughts"></form:input>
		</div>
		<div>
			<form:input type="hidden" path="user" value="${userID}"></form:input>
		</div>
		<input type="submit" value="Submit" />
	</form:form>
</body>
</html>