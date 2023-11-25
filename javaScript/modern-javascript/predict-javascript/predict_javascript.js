 //Problem 1000: Why did the code produce that output? If applicable, how would you get the index value that did not output?
const exampleVar = "example";
const exampleArr = ["ex", "am", "ple"];
console.log(exampleArr);
    
//1. Prediction of the example output should be in commented-out code here.
//2. The actual output
//3. Answering any questions associated with the problem block here.
    

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
console.log(randomCar)
console.log(otherRandomCar)

//1. Tesla Mercedes
//2. Tesla Mercedes
//3. To get the index value that did not ouput you could (const [, , lastCar] = cars) then console log it

const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);
console.log(employeeName);

//1. Elon undefined
//2. Elon (reference error)
//3. the value for the key employeeName used a different name for the variable

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

//1. 12345 (reference error)
//2. 12345 undefined
//3. password is not a key in the person object, so it's value is undefined.

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
const [,,,,fourth] = numbers
//Predict the output
console.log(first === second);
console.log(first === third);
console.log(fourth)

//1. false true
//2. false true
//3. despite their names, the constants are referencing index 1, 3, and 8 respectively

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
console.log(secondKey[secondKey.length-1])

//1. value [1, 5, 1, 8, 3, 3] 1 5
//2. value [1, 5, 1, 8, 3, 3] 1 5
//3. self explanatory 

var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (var index = 0; index < names.length; index++) {
            var name = names[index];
            console.log(name + ' was found at index ' + index);
        }
    console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
}
printNames(beatles);

//1. Paul was found at index 0 George was found at index 1 John was found at index 2 Ringo was found at index 3 name and index after loop is Ringo:4
//2. Paul was found at index 0 George was found at index 1 John was found at index 2 Ringo was found at index 3 name and index after loop is Ringo:4
//3. Contains 4 scopes

function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
        let name = names[index];
        console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
}     

//1. nothing
//2. nothing
//3. all the variables it's referencing are in a different scope

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (let index = 0; index < names.length; index++) {
            const name = names[index];
            console.log(name + ' was found at index ' + index);
        }
    }
    actuallyPrintingNames();
}
printNames(beatles);

//1. Paul was found at index 0 George was found at index 1 John was found at index 2 Ringo was found at index 3
//2. Paul was found at index 0 George was found at index 1 John was found at index 2 Ringo was found at index 3
//3. self explanatory

const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
    composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) 
console.log(planet === planetCopy)

//1. true true
//2. true false
//3. Not sure on this one since nothing in the copy was changed. Maybe === checks whether they are referencing the same informtion instead of whether the information is the same


