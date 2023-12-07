// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// the array is unsorted, contains no floats, and there may be duplicate values

// Given nums = [2, 11, 7, 15], target = 9,
// Because nums[0] + nums[2] = 2 + 7 = 9
// return [0, 2].

const nums = [2, 4, 5, -2, 1]
const target = 7

// not looping over original array more than once, but this solution gets worse the longer it takes to find a solution

function twoNums(nums, target) {
    const solutions = []
    for(let i=0; i<nums.length; i++) {
        for(let j=0; j<solutions.length; j++) {
            if(nums[i] === solutions[j]) {
                return [j, i]
            }
        }
        solutions.push(target - nums[i])
    }
    return []
}

console.log(twoNums(nums, target))

// This is better because looking up key value pairs in a dictionary is quicker than looping through an array

const twoNums2 = (nums, target) => {
    const complements = {};
    for (let i=0; i<nums.length; i++) {
        const n = nums[i];
        if (n in complements) {
            return [complements[n], i];
        }
        complements[target - n] = i;
    }
    return [];
};

console.log(twoNums2(nums, target))