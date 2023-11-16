/* 
Given array and an additional value, insert this value at the beginning of
the array by making space for it at the beginning of the array.
return the new length of the array.

Do this without using any built-in array methods or creating any new data structures.
*/


*/
const arr1a = [1, 2, 3];
const newItem1 = 0;
const expected1a = 4;
// after function is called, arr1 should be:
const arr1Expected = [0, 1, 2, 3];

const arr2a = [];
const newItem2 = "a";
const expected2a = 1;
// after function is called, arr2 should be:
const arr2Expected = ["a"];

/**
 * Shifts all items to the right by one to make space to add the given new item
 * to the front of the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @param {any} newItem To add to front.
 * @returns {number} The new length of items.
**/

function unshift(items, newItem) {
    items.length += 1;
    for(var i = items.length - 1; i > 0; i--) {
        items[i] = items[i-1];
    }
    items[0] = newItem;
    console.log(items);
    return items.length;
}

console.log(unshift(arr1a, newItem1));
console.log(unshift(arr2a, newItem2));

/* 
  Given an array, remove and
  return the value at the beginning of the array and then shift the remaining items down to fill the empty space.

  Do this without using any built-in array methods or creating any new data structures
*/

const arr1 = [1, 2, 3];
const expected1 = 1;
// after running function arr1 should now be:
const expectedArr1 = [2, 3];

const arr2 = ["a", "b", "c", "d"];
const expected2 = "a";
// after running function arr2 should now be:
const expectedArr2 = ["b", "c", "d"];

const arr3 = [];
const expected3 = undefined;
const expectedArr3 = [];

/**
 * Shifts every item of the array to the left by 1 so that the first item is
 * removed and returned.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @returns {any} The removed value previously at idx 0.
*/


function shift(items) {
    var indexZero = items[0];
    if(items.length < 1) {
        console.log(items);
        return undefined;
    }
    for(var i = 0; i < items.length - 1; i++) {
        items[i] = items[i + 1];
    }
    items.length -= 1;
    console.log(items);
    return indexZero;
}

console.log(shift(arr1));
console.log(shift(arr2));
console.log(shift(arr3));
