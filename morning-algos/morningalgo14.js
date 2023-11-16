/* 
  String: Is Palindrome

  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

    const str1 = "a x a";
    const expected1 = true;

    const str2 = "racecar";
    const expected2 = true;

    const str3 = "Dud";
    const expected3 = false;

    const str4 = "oho!";
    const expected4 = false;
  
  /**
   * Determines if the given str is a palindrome (same forwards and backwards).
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str
   * @returns {boolean} Whether the given str is a palindrome or not.
  */
 function isPalindrome(str) {
     var revStr = ""
     for(var i = str.length - 1; i >= 0; i--) {
         revStr += str[i];
     }
     return revStr === str;
 }
 
  console.log(isPalindrome(str1));
  console.log(isPalindrome(str2));
  console.log(isPalindrome(str3));
  console.log(isPalindrome(str4));
  
  /* 
  Longest Palindrome
  
  For this challenge, we will look not only at the entire string provided,
  but also at the substrings within it.
  Return the longest palindromic substring. 
  
  Strings longer or shorter than complete words are OK.
  
  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/
const str1a = "what up, daddy-o?";
const expected1a = "dad";

const str2a = "uh, not much";
const expected2a = "u";

const str3a = "Yikes! my favorite racecar erupted!";
const expected3a = "e racecar e";

const str4a = "a1001x20002y5677765z";
const expected4a = "5677765";

const str5a = "a1001x20002y567765z";
const expected5a = "567765";


function longestPalindromicSubstring(str) {
    var longestPalindrome = '';
    for(var i = 0; i < str.length - 1; i++) {
        for(var j = i+1; j < str.length - 1; j++) {
            var newStr = '';
            var currentStart = 0;
            var currentEnd = 0;
            if(str[i] !== str[j]) {
                continue
            }
            else if(str[i] === str[j]) {
                currentStart = i;
                currentEnd = j;
                for(var k = i; k <= j; k++) {
                    newStr += str[k];
                }
            if (newStr.length > longestPalindrome.length && isPalindrome(newStr) === true) {
                longestPalindrome = newStr;
            }
            }
        }
        if(longestPalindrome === "") {
            longestPalindrome = str[0];
        }
    }
    return longestPalindrome;
}

console.log(longestPalindromicSubstring(str1a));
console.log(longestPalindromicSubstring(str2a));
console.log(longestPalindromicSubstring(str3a));
console.log(longestPalindromicSubstring(str4a));
/*****************************************************************************/
  
  /*****************************************************************************/