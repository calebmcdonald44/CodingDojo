<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Save Travels</title>
</head>
<body>
	<h1>Expense Details:</h1>
	<h2>Expense Name: <c:out value="${currentExpense.expense}"></c:out></h2>
	<h2>Vendor: <c:out value="${currentExpense.vendor}"></c:out></h2>
	<h2>Amount: $<c:out value="${currentExpense.amount}"></c:out></h2>
	<h2>Description: <c:out value="${currentExpense.description}"></c:out></h2>
	<a href="/save-travels">Go Back</a>
</body>
</html>