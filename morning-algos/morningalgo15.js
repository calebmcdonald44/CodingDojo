/* 
Given an array of strings
return the number of times each string occurs (a frequency / hash table)
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function makeFrequencyTable(arr) {
    var freqTable = {};
    for(var i = 0; i < arr.length; i++) {
        if(freqTable[arr[i]]) {
            freqTable[arr[i]] += 1;
        }
        else {
            freqTable[arr[i]] = 1;
        }
    }
    return freqTable;
}

// console.log(makeFrequencyTable(arr1));
// console.log(makeFrequencyTable(arr2));
// console.log(makeFrequencyTable(arr3));

/*****************************************************************************/

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1a = [1];
const expected1a = 1;

const nums2a = [5, 4, 5];
const expected2a = 4;

const nums3a = [5, 4, 3, 4, 3, 4, 5];
const expected3a = 4; // there is a pair of 4s but one 4 has no pair.

const nums4a = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4a = 1;

function oddOccurrencesInArray(nums) {
    var freqTable = makeFrequencyTable(nums);
    let keys = Object.keys(freqTable)
    let values = Object.values(freqTable)
    let output = undefined;
    for(var i = 0; i < keys.length; i++) {
        if(values[i] % 2 !== 0) {
            output = keys[i];
            return output;
        }
    }
    return null;
}

console.log(oddOccurrencesInArray(nums1a), "should equal", expected1a);
console.log(oddOccurrencesInArray(nums2a), "should equal", expected2a);
console.log(oddOccurrencesInArray(nums3a), "should equal", expected3a);
console.log(oddOccurrencesInArray(nums4a), "should equal", expected4a);

/*****************************************************************************/