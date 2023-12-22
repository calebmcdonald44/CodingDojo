// Can you solve this real interview question? Longest Common Prefix - Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:


const input1 = ["flower","flow","flight"]
const output1 = "fl"


// Example 2:

const input2 = ["dog","racecar","car"]
const output2 = ""


const longestPrefix = (words) => {
    let result = words[0]
    for(i=1; i<words.length; i++) {
        for(j=0; j<words[i].length; j++) {
            if(words[i][j]===result[j]) {
                continue
            }
            else {
                if(j===0) {
                    result = ""
                    return result
                } else {
                    result = result.slice(0, i)
                    break
                }
            }
        }
    }
    return result
}

console.log(longestPrefix(input1))
console.log(longestPrefix(input2))

var longestCommonPrefix = function(strs) {
    return strs.reduce((acc, w) => {
        for (let i=0; i<acc.length; i++) {
            if (acc[i] !== w[i]) {
                return acc.slice(0, i);
            }
        }
        return acc;
    });
};

console.log(longestCommonPrefix(input1))
console.log(longestCommonPrefix(input2))
