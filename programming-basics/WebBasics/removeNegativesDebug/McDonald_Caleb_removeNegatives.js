// Debug the following code that removes negative values from an array
// had 'var arr' as the parameter instead of just arr
function removeNegatives(arr) {
    for(var i=0; i<=arr.length; i++) {
// had <= instead of <
        if(arr[i] < 0) {
// Had j instead i in the index
            arr[i] = arr.pop();
            i--;
        }
    }
// said array instead of arr
    return arr;
}

var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
console.log(result);