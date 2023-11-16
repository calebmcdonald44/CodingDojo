/* 
    Given a string that may have extra spaces at the start and the end,
    return a new string that has the extra spaces at the start and the end trimmed (removed)
    do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {
    let result = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== " ") {
            result += str[i];
        }
        else {
            if(str[i + 1] !== " " && str[i - 1] !== " ") {
                result += str[i];
            }
            else {
                continue
            }
        }
    }
    return result;
}

console.log(trim(str1));

/*****************************************************************************/

/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.

  Is there a quick way to determine if they aren't an anagram before spending more time?

  Given two strings
  return whether or not they are anagrams
*/

const strA1a = "yes";
const strB1a = "eys";
const expected1a = true;

const strA2a = "yes";
const strB2a = "eYs";
const expected2a = true;

const strA3a = "no";
const strB3a = "noo";
const expected3a = false;

const strA4a = "silent";
const strB4a = "listen";
const expected4a = true;

const strA5a = "MAMMOTH";
const strB5a = "THMMOAM";
const expected5a = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {
    let s1dict = {};
    let s2dict = {};
    if(s1.length != s2.length) {
        return false;
    }
    for(let i = 0; i < s1.length; i++) {
        if(s1dict[s1[i].toLowerCase()] && s2dict[s2[i].toLowerCase()]) {
            s1dict[s1[i].toLowerCase()] += 1;
            s2dict[s2[i].toLowerCase()] += 1;
        }
        else if(s1dict[s1[i].toLowerCase()] && !s2dict[s2[i].toLowerCase()]) {
            s1dict[s1[i].toLowerCase()] += 1;
            s2dict[s2[i].toLowerCase()] = 1;
        }
        else if(s2dict[s2[i].toLowerCase()] && !s1dict[s1[i].toLowerCase()]) {
            s2dict[s2[i].toLowerCase()] += 1;
            s1dict[s1[i].toLowerCase()] = 1;
        }
        else {
            s1dict[s1[i].toLowerCase()] = 1;
            s2dict[s2[i].toLowerCase()] = 1;
        }
    }
    for(let j = 0; j < s1.length; j++) {
        if(s1dict[s1[j]] === s2dict[s1[j]]) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}

console.log(isAnagram(strA1a, strB1a));
console.log(isAnagram(strA2a, strB2a));
console.log(isAnagram(strA3a, strB3a));
console.log(isAnagram(strA4a, strB4a));
console.log(isAnagram(strA5a, strB5a));