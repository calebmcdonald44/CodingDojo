/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/
const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
  ];
  const expected1 = 2;
  /* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */  
  const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ];
  const expected2 = 0;
  /* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */
  
  
function diagonalDifference(sqrMatrix) {
    let diagonal1 = 0;
    let diagonal2 = 0;
    for(let i = 0, j = sqrMatrix.length - 1; j >= 0; i++, j--) {
        diagonal1 += sqrMatrix[i][i];
        diagonal2 += sqrMatrix[i][j];
    }
    return Math.abs(diagonal1-diagonal2);
    }

console.log(diagonalDifference(squareMatrix1))
console.log(diagonalDifference(squareMatrix2))

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.


// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// const mostFrequent = (arr, k) => {
//     let freqTable = {}
//     for(let i = 0; i < arr.length; i++) {
//         if(!freqTable[arr[i]]) {
//             freqTable[arr[i]] = 0
//         }
//         freqTable[arr[i]] += 1
//     }

//     find(Object.entries(freqTable), k)
//     return freqTable
// }

// const find = (arr, k) => {
//     let maxValue = 0
//     let maxKey = 0
//     for(const [key, value] of arr) {
//         if(value > maxValue) {
//             maxValue = value
//             maxKey = key
//         }
//     } 
//     console.log('maxKey: ', maxKey)
//     return maxKey
// }

// console.log(mostFrequent([1, 2, 3, 4, 4, 4, 5, 5], 2))

