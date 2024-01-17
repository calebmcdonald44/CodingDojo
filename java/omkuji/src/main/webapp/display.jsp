<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/style.css">
<meta charset="UTF-8">
<title>Omikuji</title>
</head>
<body>
	<div class="display-background">
		<h2 class="display-text">In <c:out value="${number}" /> years, you will live in <c:out value="${city}" /> with <c:out value="${person}" /> as your roommate, selling <c:out value="${hobby}" /> for a living. The next time you see a <c:out value="${thing}" />, you will have good luck. Also, <c:out value="${nice}" /></h2>
	</div>
	<a href="/">Go Back</a>
</body>
</html>