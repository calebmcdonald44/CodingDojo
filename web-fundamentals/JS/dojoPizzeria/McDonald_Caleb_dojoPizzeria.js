// Function that can store different types of pizza

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

// Running the function with different pizza ingredients

var p1 =  pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("St. Louis Style", "sweet", ["provel"], ["tomato"]);
console.log(p3);

var p4 = pizzaOven("stuffed", "alfredo", ["mozzarella"], ["chicken", "bacon", "green onion"]);
console.log(p4);

// Variable with many options for each component of pizza

var pizzaOptions = {
    crustType: ['deep dish', 'thin and crispy', 'traditional', 'stuffed'],
    sauceType: ['marinara', 'alfredo', 'BBQ', 'cream cheese'],
    cheeses: ['mozzarella', 'colby jack', 'provel'],
    toppings: ['olives', 'onion', 'green pepper', 'mushroom', 'sausage', 'pepperoni', 'Canadian bacon', 'chicken']
}

// Function that returns a random pizza based on ingredients stored in the variable
// pizzaOptioins

function randomPizza() {

    var pizza = {
        crustType: [],
        sauceType: [],
        cheeses: [],
        toppings: [],
    }

    pizza.crustType.push(pizzaOptions.crustType[Math.floor(Math.random() * pizzaOptions.crustType.length)]);
    pizza.sauceType.push(pizzaOptions.sauceType[Math.floor(Math.random() * pizzaOptions.sauceType.length)]);
    pizza.cheeses.push(pizzaOptions.cheeses[Math.floor(Math.random() * pizzaOptions.cheeses.length)]);
    pizza.toppings.push(pizzaOptions.toppings[Math.floor(Math.random() * pizzaOptions.toppings.length)]);
    return pizza;
}

console.log(randomPizza());