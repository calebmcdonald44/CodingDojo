function popFront(arr) {
    var arrNew = [];
    for(var j = 0; j < arr.length; j++) {
        arrNew[j] = arr[j];
    }
    for(var i = arr.length - 2; i > -1; i--) {
        arr[i] = arrNew[i + 1];
    }
    arr.pop();
    return arr;
}
console.log(popFront([4, 11, 23, 12]))