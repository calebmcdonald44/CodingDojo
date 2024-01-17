<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<script type="text/javascript" src="/js/static.js"></script>
</head>
<body>

	<h1>test</h1>
	<% for (int i = 0; i < 5; i++) { %>
	<p><%= i %></p>
	<% } %>

	<h2>2 + 2 is:</h2>
	<h2><c:out value="${2+2}" /></h2>

	<h2>Name in controller file:</h2>
	<h2><c:out value="${name}"/></h2>
	
	<h2>Count:</h2>
	<h2><c:out value="${count}"/></h2>

</body>
</html>