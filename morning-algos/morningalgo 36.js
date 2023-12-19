// String Matcher

// given a Target str: "riot"
// given a Search str: "Remind me to record the video"

// return the count of how many times Target can be created using the characters from Search
// Characters from search may be used in any order, but can not be used more than once.

target = "riot"
search = "Remind me to record the video"

target2 = "Mom"
search2 = "My mom made me marshmallows"

// Output = 2

const strMatcher = (search, target) => {
    const freqTable = {}
    for(let i = 0; i < search.length; i++) {
        let c = search[i].toLowerCase()
        if(freqTable[c]) {
            freqTable[c] += 1
        }
        else {
            freqTable[c] = 1
        }
    }
    const targetFreqTable = {}
    for(let j = 0; j < target.length; j++) {
        let c = target[j].toLowerCase()
        if(targetFreqTable[c]) {
            targetFreqTable[c] += 1
        }
        else {
            targetFreqTable[c] = 1
        }
    }
    let result = Infinity
    for(const key in targetFreqTable) {
        const timesSpelled = Math.floor((freqTable[key] ?? 0) / targetFreqTable[key] )
        result = Math.min(result, timesSpelled)
    }
    return result
}

console.log(strMatcher(search, target))
console.log(strMatcher(search2, target2))

// not case sensitive, Capital characters and lowercase characters count for the same character
// can this be done in O(n)?