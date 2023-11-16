function howMuchLeftOverCake(numberOfPieces, numberOfPeople) {
    var leftoverCake = numberOfPieces % numberOfPeople
    if (leftoverCake == 0) {
        console.log("No leftovers for you!")
    }
    else if (leftoverCake <= 2) {
        console.log("You have some leftovers")
    }
    else if (leftoverCake <= 5) {
        console.log("You have leftovers to share")
    }
    else {
        console.log("Hold another party!")
    }
}