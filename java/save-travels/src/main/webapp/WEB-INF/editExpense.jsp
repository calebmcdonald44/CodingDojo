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
	<h1>Edit Expense:</h1>
		<form:form action="/save-travels/expense/update/${currentExpense.id}" method="post" modelAttribute="currentExpense">
		<input type="hidden" name="_method" value="put"/>
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