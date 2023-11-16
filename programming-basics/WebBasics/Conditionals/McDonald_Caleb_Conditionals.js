var dayOfWeek = 'Wednesday'
// timeOfDay must be entered in military time with no colons
var timeOfDay = 1234
var randomTreat = Math.random();

function homeworkReward() {
    if(timeOfDay < 1000) {
        return 'Go get yourself a latte!';
    } else if(timeOfDay >= 1000 && timeOfDay < 1500) {
        return "You've earned a hot chocolate!";  
    } else if(timeOfDay >= 1500 && timeOfDay < 1800) {
        if(timeOfDay % 2 === 0) {
            if(randomTreat <= 0.333) {
                return "So what? You finished you're homework. You want a cookie or something? ... Really? You do? Okay, here ya go!";
            } else if(randomTreat >= 0.666) {
                return "Time for candy! Hopefully you've got something in your Halloween stash other than tootsie rolls.";
            } else {
                if(dayOfWeek == 'Wednesday') {
                    return "Looks like it's time for strawberry ice cream!";
                } else {
                    return " Some vanilla ice cream is gonna hit the spot after a long day of homework!";
                }
            }
        } else {
            if(randomTreat <= 0.333) {
                return "You've earned a hot chocolate!";
            } else if(randomTreat >= 0.666) {
                return "Homework's done, let's party! Tea party, that is.";
            } else {
                return "That homework was a piece of cake. And so is this piece of cake you're about to eat!";
            }
        }
    } else if(timeOfDay >= 1800 && timeOfDay < 2200) {
        if(dayOfWeek == 'Wednesday') {
            return "Looks like it's time for strawberry ice cream!";
        } else {
            return " Some vanilla ice cream is gonna hit the spot after a long day of homework!";
        }
    } else {
        return "Congrats, it's finally bedtime!"
    }
}