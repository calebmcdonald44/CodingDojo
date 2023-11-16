/* case insensitive string compare */

const strA1 = "ABC";
const strB1 = "abc";
const expected1 = true;

const strA2 = "ABC";
const strB2 = "abd";
const expected2 = false;

const strA3 = "ABC";
const strB3 = "bc";
const expected3 = false;

const strA4 = "AbC";
const strB4 = "aBc";
const expected4 = true;

/**
 * Determines whether or not the strings are equal, ignoring case.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} strA
 * @param {string} strB
 * @returns {boolean} If the strings are equal or not.

 */
function caseInsensitiveStringCompare(strA, strB) {
    return strA.toUpperCase() == strB.toUpperCase()
}

console.log(caseInsensitiveStringCompare(strA1, strB1));
console.log(caseInsensitiveStringCompare(strA2, strB2));
console.log(caseInsensitiveStringCompare(strA3, strB3));
console.log(caseInsensitiveStringCompare(strA4, strB4));