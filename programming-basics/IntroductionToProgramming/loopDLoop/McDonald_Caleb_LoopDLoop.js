/* We need a for loop because you need to check how far the runner has
run every mile */
// You would start at 1 mile 
// The loop will stop once the runner has completed more than 6 miles
/* The loop will know when to stop because of a statement that only executes
the loop if the runner has completed 6 miles or less */
// The amount of miles completed
// The mile the runner is on, and whether or not it is an even numbered mile

var evenMile = milesCompleted % 2;
for (var milesCompleted = 1; num <= 6; num +=1) {
    if (evenMile == 0) {
        console.log("Deposit candy.");
    } else {
        console.log("Do not deposit candy.");
    }
}
