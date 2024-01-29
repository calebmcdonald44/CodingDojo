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
	<h1>Welcome, <c:out value="${userName}"></c:out></h1>
	<a href="/logout">Logout</a>
	<a href="/book/add">Add a New Book to Your Shelf</a>
	<table>
		<thead>
			<tr>
				<th>ID</th>
				<th>Title</th>
				<th>Author</th>
				<th>Posted By</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="book" items="${books}">
				<tr>
					<td><c:out value="${book.id}"></c:out></td>
					<td><a href="/book/view/${book.id}"><c:out value="${book.title}"></c:out></a></td>
					<td><c:out value="${book.author}"></c:out></td>
					<td><c:out value="${book.user.userName}"></c:out></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</body>
</html>