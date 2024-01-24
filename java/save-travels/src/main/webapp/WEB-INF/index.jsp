<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Save Travels</title>
</head>
<body>
	<h1>Save Travels</h1>
	<table>
		<thead>
			<tr>
				<th>ID</th>
				<th>Expense</th>
				<th>Vendor</th>
				<th>Amount</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="expense" items="${expenses}">
				<tr>
					<td><c:out value="${expense.id}"></c:out></td>
					<td><a href="/save-travels/expense/${expense.id}"><c:out value="${expense.expense}"></c:out></a></td>
					<td><c:out value="${expense.vendor}"></c:out></td>
					<td><c:out value="${expense.amount}"></c:out></td>
					<td>
						<a href="/save-travels/expense/edit/${expense.id}">Edit</a>
						<form action="/save-travels/expense/delete/${expense.id}" method="post">
						    <input type="hidden" name="_method" value="delete">
						    <input type="submit" value="Delete">
						</form>	
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<h2>Add an Expense:</h2>
	<form:form action="/save-travels/create" method="post" modelAttribute="newExpense">
		<div>
			<form:label path="expense">Expense Name:</form:label>
			<form:errors path="expense"></form:errors>
			<form:input path="expense"></form:input>
		</div>
		<div>
			<form:label path="vendor">Vendor:</form:label>
			<form:errors path="vendor"></form:errors>
			<form:input path="vendor"></form:input>
		</div>
		<div>
			<form:label path="amount">Amount:</form:label>
			<form:errors path="amount"></form:errors>
			<form:input type="number" path="amount"></form:input>
		</div>
		<div>
			<form:label path="description">Description:</form:label>
			<form:errors path="description"></form:errors>
			<form:textarea path="description"></form:textarea>
		</div>
		<input type="submit" value="Submit" />
	</form:form>
</body>
</html>