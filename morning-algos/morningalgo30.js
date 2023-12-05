// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
k = 16
arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsqSums(arr, k) {
    const resultArr = []
    for(let i = 0; i < arr.length; i++) {
        let tempSum = 0
        for(let j = i; tempSum <= k && j < arr.length; j++) {
            tempSum += arr[j]
            if(tempSum === k) {
                resultArr.push(arr.slice(i, j+1))
            }
        }
    }
    return resultArr
}

console.log(findConsqSums(arr, k))

// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

// Example 1:

// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// Example 2:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

function allPermutations(arr) {
    const resultArr = []
    for(let i = 0; i < arr.length; i++) {
        const newArr = [arr[i]]
        const remainArr = arr.slice(0, i).concat(arr.slice(i+1))
        const permutations = allPermutations(remainArr)
        console.log('permutations: ', permutations);
        for(let j = 0; j < permutations.length; j++) {
            console.log("loop activating")
            resultArr.push(newArr.concat(permutations[j]))
        }
    }
    return resultArr
}

console.log(allPermutations([1,2,3]))