/*
  Given an arr and a separator string, output a string of every item in the array separated by the separator.

  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/



const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";
// .t
/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */
function join(arr, separator) {
    let list = arr
    let string = ''
    for (let i = 0; i < list.length;i++){
    string += list[i].toString()
    if ([i] < list.length - 1){
        string += separator
    }
    } return string
}
console.log(join(arr1,separator1))
console.log(join(arr2,separator2))
console.log(join(arr3,separator3))
console.log(join(arr4,separator4))
console.log(join(arr5,separator5))

/* 
  Acronyms

  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 

  Do it with .split first if you need to, then try to do it without
*/

const str1 = "object oriented programming";
const expected1 = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const str3 = "software development life cycle";
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {
    var result = "";
    for(var i = 0; i < str.length; i++) {
        if(i === 0 && str[i] !== ' ') {
            result += str[i].toUpperCase();
        }
        else if(str[i] === ' ' && i !== str.length - 1 && str[i + 1] !== ' ') {
            result += str[i + 1].toUpperCase();
        }
    }
    return result;
}
console.log(acronymize(str4));

/*****************************************************************************/