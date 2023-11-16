const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

const str3 = "typewriter";
const expected3 = "retirwepyt";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */
function reverseStr(str) {
    if (str === "") {
        return str;
    }
    return str.slice(str.length-1) + reverseStr(str.slice(0, str.length-1));
}

console.log(reverseStr(str1), "should be", expected1);
console.log(reverseStr(str2), "should be", expected2);
console.log(reverseStr(str3), "should be", expected3);