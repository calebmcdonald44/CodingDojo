/* 
  Given an array and an index,
  remove the item at that index.
  return the removed item
  
  No built-in array methods except pop().
*/

const arr1a = ["a", "b", "c", "d", "e"];
const removeIdx1a = 1;
const expected1a = "b";
// after function call, arr1 should be:
const arr1Expecteda = ["a", "c", "d", "e"];

const arr2a = ["a", "b", "c"];
const removeIdx2a = 3;
const expected2a = null;
const arr2Expecteda = ["a", "b", "c"];

const arr3a = ["a", "b", "c"];
const removeIdx3a = -3;
const expected3a = null;
const arr3Expecteda = ["a", "b", "c"];

/**
 * Removes and returns the item at the given idx from the given array and
 * shifts the remaining items to fill the empty space created by the item
 * being removed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @param {number} idx Index of the item to be removed.
 * @returns {any} The removed item.
 */
function removeAt(items, idx) {
    if(idx < 0 || idx >= items.length) {
        console.log(items);
        return null;
    }
    var idxValue = items[idx];
    for(var i = idx; i < items.length; i++) {
        items[i] = items[i + 1];
    }
    items.length--;
    console.log(items);
    return idxValue;
}

console.log(`Given ${arr1a} removing ${removeIdx1a} we get ${removeAt(arr1a,removeIdx1a)} which should be ${expected1a} and ${arr1a} should be ${arr1Expecteda}`);
console.log(`Given ${arr2a} removing ${removeIdx2a} we get ${removeAt(arr2a,removeIdx2a)} which should be ${expected2a} and ${arr2a} should be ${arr2Expecteda}`);
console.log(`Given ${arr3a} removing ${removeIdx3a} we get ${removeAt(arr3a,removeIdx3a)} which should be ${expected3a} and ${arr3a} should be ${arr3Expecteda}`);

/* 
  Given an array, move the minimum value to the front in-place
  return the array after done.

  No built in methods.
*/

const nums1 = [6, 4, 5, 1, 3, 2];
const expected1 = [1, 6, 4, 5, 3, 2];

const nums2 = [1, 5, 2, 9];
const expected2 = [1, 5, 2, 9];

// The min occurs twice.
const nums3 = [5, 1, 0, 2, 3, 0];
const expected3 = [0, 5, 1, 2, 3, 0];

/**
 * Moves the smallest number in the given array to the front.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given arr after the min has been moved to front.
 */
function minToFront(nums) {
    var mindex = 0;
    for(var i = 1; i < nums.length; i++) {
        if(nums[i] < nums[mindex]) {
            mindex = i;
        }
    }
    for(var j = mindex; j > 0; j--) {
        var temp = nums[j];
        nums[j] = nums[j-1];
        nums[j-1] = temp;
    }
    return nums;
}

console.log(minToFront(nums1),"should be",expected1);
console.log(minToFront(nums2),"should be",expected2);
console.log(minToFront(nums3),"should be",expected3);