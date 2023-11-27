console.log(hello);                                   
var hello = 'world';
//PREDICTION: it will console log "undefined" (correct)                              

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//PREDICTION: it will console log "magnet" (correct)

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//PREDICTION: it will console log "super cool" (correct)

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//PREDICTION: it will console log "chicken half-chicken" (correct)

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//PREDICTION: reference error because food isn't global (incorrect; type error because mean is not a function)


console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// PREDICTION: it will console log "undefined rock r&b r&b" (incorrect; last one was disco, i guess because
// it only changed the value of the variable within the function scope)

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//PREDICTION: it will console log "san jose seattle burbank san jose" (correct)

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
    dojo.hiring = true;
    }
    else if(dojo.students <= 0){
    dojo = "closed for now";
    }
    return dojo;
}
//PREDICTION: it will console log {name: "Chicago", students: 65, hiring: true} "closed for now" (incorrect;
//it returned the first dictionary but had an error when someone attempted to change the value of a constant)
