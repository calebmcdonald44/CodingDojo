/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

function rehash(str) {
    const hashDict = {};
    let tempNum = "";
    let tempLet = str[0];
    let result = ""
    const pairBuilder = () => {
        if(tempLet in hashDict) {
            hashDict[tempLet] += parseInt(tempNum)
        }
        else {
            hashDict[tempLet] = parseInt(tempNum)
        }
    }
    for(let i = 1; i < str.length; i++) {
        if(isNaN(str[i])) {
            pairBuilder()
            tempLet = str[i]
            tempNum = ""
        }
        else {
            tempNum += str[i]
        }
    }
    pairBuilder()
    const dictKeys = Object.keys(hashDict).sort()
    for(let i = 0; i < dictKeys.length; i++) {
        result += dictKeys[i]
        result += String(hashDict[dictKeys[i]])
    }
    return result
}

console.log(rehash(str1));

