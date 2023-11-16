function minToFront(arr) {
    var min = arr[0];
    var minPosition = []
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
            minPosition.push(i);
        }
    }
    arr.splice(minPosition[minPosition.length - 1], 1);
    var arrNew = [min];
    for(var j = 0; j < arr.length; j++) {
        arrNew.push(arr[j]);
    }
    return arrNew;
}
console.log(minToFront([4, 2, 1, 3, 5]));