// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/

// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

let testArr = [78, 5, 678, 765, 456, 78, 265, 908];

function bubbleSort(arr) {
    let swapped = false
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1]) {
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            swapped = true
        }
    }
    if(swapped === true) {
        bubbleSort(arr)
    }
    return arr;
}

console.log(bubbleSort(testArr))


// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/