function mergeSort(arr) {
    if (arr.length <= 1){
        return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let leftHalf = arr.slice(0,middle);
    let rightHalf = arr.slice(middle);

    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);
    return mergeSortedArrays(sortedLeft, sortedRight);

}

function mergeSortedArrays(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            if (leftIndex === left.length-1){
                result.push(right[rightIndex]);
            }
            leftIndex++;
        } else{
            result.push(right[rightIndex]);
            if (rightIndex === right.length-1){
                result.push(left[leftIndex])
            }
            rightIndex++;
        }
    }
    return result
}

console.log(mergeSortedArrays([1,5,10,37], [2,7,11]));
console.log(mergeSort([1,110,10,37,3,3,40,510,30,2]));