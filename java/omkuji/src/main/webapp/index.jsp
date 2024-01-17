<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Omikuji</title>
<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<h1>Send an Omikuji!</h1>
	<form action="/submit" method="POST">
		<div class="duo">
			<label for="number">Pick any number from 5 to 25</label>
			<input  type="number" name="number"></input>
		</div>
		<div class="duo">
			<label for="city">Enter the name of any city</label>
			<input  type="text" name="city"></input>
		</div>
		<div class="duo">
			<label for="person">Enter the name of any real person</label>
			<input type="text" name="person"></input>
		</div>
		<div class="duo">
			<label for="hobby">Enter a professional endeavor or hobby</label>
			<input type="text" name="hobby"></input>
		</div>
		<div class="duo">
			<label for="thing">Enter any type of living thing</label>
			<input type="text" name="thing"></input>
		</div>
		<div class="duo">
			<label for="nice">Say something nice to someone</label>
			<textarea name="nice"></textarea>
		</div>
		<div class="duo">
			<label for="submit">Send and show a friend</label>
			<input type="submit" name="submit"></input>
		</div>
	</form>
</body>
</html>