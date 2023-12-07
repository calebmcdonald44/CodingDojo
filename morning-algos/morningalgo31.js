

// #1 Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 0-9 and it's missing a number, how do you find it?

// quickly: O(n)
// no space constraints

// given [3, 0, 1]
// return 2

// given [5, 2, 7, 8, 4, 9, 3, 0, 1]
// return 6

function missingNum(arr) {
    trueSum = 0
    realSum = 0
    for(let i=1; i<=arr.length; i++) {
        trueSum += i
    }
    for(let i=0; i<arr.length; i++) {
        realSum += arr[i]
    }
    return trueSum-realSum
}

console.log(missingNum([5, 2, 7, 8, 4, 9, 3, 0, 1]))
