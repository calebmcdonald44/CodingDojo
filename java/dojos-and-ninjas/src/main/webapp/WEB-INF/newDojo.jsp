<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>New Dojo</h1>
	<form:form action="/dojo/create" method="post" modelAttribute="newDojo">
		<div>
			<form:label path="name">Name:</form:label>
			<form:errors path="name"></form:errors>
			<form:input path="name"></form:input>
		</div>
		<input type="submit" value="Submit" />
	</form:form>
</body>
</html>