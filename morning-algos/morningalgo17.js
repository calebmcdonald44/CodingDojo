/* 
Parens Valid

Given an str that has parenthesis in it
return whether the parenthesis are valid
*/



const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {
    let tracker = 0;
    for(let c of str) {
        if(c === '(') {
            tracker += 1;
        } else if(c === ')') {
            tracker -= 1;
            if(tracker < 0) {
                return false;
            }
        }
    }
    return tracker === 0;
}

console.log(parensValid(str1), "should be", expected1);
console.log(parensValid(str2), "should be", expected2);
console.log(parensValid(str3), "should be", expected3);
console.log(parensValid(str4), "should be", expected4);

/*****************************************************************************/

/* 
Braces Valid

Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1a = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1a = true;

const str2a = "D(i{a}l[ t]o)n{e";
const expected2a = false;

const str3a = "A(1)s[O (n]0{t) 0}k";
const expected3a = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    const table = { "}": "{", ")": "(", "]": "[" };
    const stack = [];
    for(c of str) {
        if(Object.values(table).includes(c)) {
            stack.push(c);
        } else if(c in table) {
            const popped = stack.pop();
            if(popped !== table[c]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(bracesValid(str1a), "should be", expected1a);
console.log(bracesValid(str2a), "should be", expected2a);
console.log(bracesValid(str3a), "should be", expected3a);

/*****************************************************************************/