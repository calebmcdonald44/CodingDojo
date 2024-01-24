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
	<h1>New Ninja</h1>
	<form:form action="/ninja/create" method="post" modelAttribute="newNinja">
		<div>
			<form:label path="dojo">Dojo Location:</form:label>
			<form:errors path="dojo"></form:errors>
			<form:select path="dojo">
				<c:forEach var="dojo" items="${dojos}">
					<option value="${dojo.id}">${dojo.name}</option>
				</c:forEach>
			</form:select>
		</div>
	<!-- 	how to make drop down with form:form, is dojo correct path -->
		<div>
			<form:label path="firstName">First Name:</form:label>
			<form:errors path="firstName"></form:errors>
			<form:input path="firstName"></form:input>
		</div>
		<div>
			<form:label path="lastName">Last Name:</form:label>
			<form:errors path="lastName"></form:errors>
			<form:input path="lastName"></form:input>
		</div>
		<div>
			<form:label path="age">Age:</form:label>
			<form:errors path="age"></form:errors>
			<form:input type="number" path="age"></form:input>
		</div>
		<input type="submit" value="Submit" />
	</form:form>
</body>
</html>