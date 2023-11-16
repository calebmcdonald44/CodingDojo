// variables for program that determines if a guest can ride a roller coaster.
var minimum_age = 10; // guest must be at least 10 years old to ride.
var minimum_height = 42; // guest must be at least 42 inches tall to ride.

if (minimum_height >= 42 || minimum_age >= 10) {
    console.log("Get on that ride, kiddo!");
}   else {
    console.log("Sorry kiddo. Maybe next year.")
}