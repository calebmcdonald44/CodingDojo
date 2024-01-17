<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Form</title>
</head>
<body>
	<h1>Login</h1>
	<form action="/login" method="POST">
		<label for="email">Email: </label>
		<input type="text" name="email"/>
		<label for="password">Password: </label>
		<input type="password" name="password"/>
		<input type="submit" value="Login"/>
	</form>
</body>
</html>