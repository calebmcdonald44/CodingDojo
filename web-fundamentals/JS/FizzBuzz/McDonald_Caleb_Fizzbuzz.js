// For every number 1-100-
// if divisible by 3, print 'Fizz'. If divisible by 5, print
// 'Buzz'. If divisible by both, print 'FizzBuzz'. If divisible
// by neither, print the number

for(var i = 1; i < 101; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}