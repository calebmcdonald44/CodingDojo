<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>Register</h1>
	<form:form action="/register" method="post" modelAttribute="newUser">
		<div>
			<form:label path="userName">Username:</form:label>
			<form:errors path="userName"></form:errors>
			<form:input path="userName"></form:input>
		</div>
		<div>
			<form:label path="email">Email:</form:label>
			<form:errors path="email"></form:errors>
			<form:input path="email"></form:input>
		</div>
		<div>
			<form:label path="password">Password:</form:label>
			<form:errors path="password"></form:errors>
			<form:input type="password" path="password"></form:input>
		</div>
		<div>
			<form:label path="confirm">Confirm Password:</form:label>
			<form:errors path="confirm"></form:errors>
			<form:input type="password" path="confirm"></form:input>
		</div>
		<input type="submit" value="Submit" />
	</form:form>
	<h1>Login</h1>
	<form:form action="/login" method="post" modelAttribute="newLogin">
		<div>
			<form:label path="email">Email:</form:label>
			<form:errors path="email"></form:errors>
			<form:input path="email"></form:input>
		</div>
		<div>
			<form:label path="password">Password:</form:label>
			<form:errors path="password"></form:errors>
			<form:input type="password" path="password"></form:input>
		</div>
		<input type="submit" value="Submit" />
	</form:form>
</body>
</html>