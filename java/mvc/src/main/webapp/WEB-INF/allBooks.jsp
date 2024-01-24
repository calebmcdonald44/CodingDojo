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
	<h1>All Books: </h1>
	<table>
		<thead>
			<th>ID</th>
			<th>Title</th>
			<th>Language</th>
			<th># of Pages</th>
			<th>Action</th>
		</thead>
		<tbody>
			<c:forEach var="book" items="${books}">
				<tr>
					<td><c:out value="${book.id}"></c:out></td>
					<td><a href="/books/${book.id}"><c:out value="${book.title}"></c:out></a></td>
					<td><c:out value="${book.language}"></c:out></td>
					<td><c:out value="${book.numberOfPages}"></c:out></td>
					<td>
						<form action="/books/${book.id}/delete" method="post">
						    <input type="hidden" name="_method" value="delete">
						    <input type="submit" value="Delete">
						</form>	
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<a href="/books/new">Add a New Book</a>
</body>
</html>