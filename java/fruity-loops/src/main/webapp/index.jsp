<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Fruity Loops</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<h1>Fruit Store</h1>
	<div class="pink">
		<table>
			<thead>
				<th>Name:</th>
				<th>Price:</th>
			</thead>
			<tbody>
				<c:forEach var="fruit" items="${fruits}">
				<tr>
					<td><c:out value="${fruit.name}"></c:out></td>
					<td><c:out value="${fruit.price}"></c:out></td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>

	
</body>
</html>