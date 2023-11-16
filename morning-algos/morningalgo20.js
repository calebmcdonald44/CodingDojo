/* 
    Balance Index

    Here, a balance point is ON an index, not between indices.

    Return the balance index where sums are equal on either side
    (exclude its own value).

    Return -1 if none exist.
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;    

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [1, 1, 4, 5, 4, 2];
const expected3 = 3;

const nums4 = [4,6,8,9,4,3,2,4,67,8,8,]
const expected4 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    if (nums.length <= 2) {
        return -1;
    }
    for (var i = 0; i < nums.length; i++) {
        var temp1 = nums.slice(0, i);
        var temp2 = nums.slice(i + 1, nums.length);
        if (temp1.reduce(function (a, b) {return a + b;}, 0) == temp2.reduce(function (a, b) {return a + b;}, 0))  {
            return i;
        }
    }
    return -1;
}


console.log(balanceIndex(nums1))
console.log(balanceIndex(nums2))
console.log(balanceIndex(nums3))
console.log(balanceIndex(nums4))

/*****************************************************************************/