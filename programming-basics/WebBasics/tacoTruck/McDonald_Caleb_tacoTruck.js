function bestLocation(arr) {
    var xCoordinates = [];
    var yCoordinates = [];
// Separating x and y coordinates into different arrays
    for(var i = 0; i < arr.length; i++) {
        xCoordinates.push(arr[i][0]);
        yCoordinates.push(arr[i][1]);
    }
// Creating variables for the minimum and maximum values of xCoordinates
    var xCoordinatesMax = xCoordinates[0];
    var xCoordinatesMin = xCoordinates[0];
    for(var j = 1; j < xCoordinates.length; j ++) {
        if(xCoordinates[j] > xCoordinatesMax) {
            xCoordinatesMax = xCoordinates[j];
        } if(xCoordinates[j] < xCoordinatesMin) {
            xCoordinatesMin = xCoordinates[j];
        }
    }
// Creating variables for the minimum and maximum values of yCoordinates
    var yCoordinatesMax = yCoordinates[0];
    var yCoordinatesMin = yCoordinates[0];
    for(var k = 1; k < yCoordinates.length; k ++) {
        if(yCoordinates[k] > yCoordinatesMax) {
            yCoordinatesMax = yCoordinates[k];
        } if(yCoordinates[k] < yCoordinatesMin) {
            yCoordinatesMin = yCoordinates[k];
        }
    }
/* Finding what value between xCoordinatesMax and XCoordinatesMin results in the lowest
overall value when it is subtracted from each value in xCoordinates and the absolute
values of those numbers are added */
var xOptimal = 0;
var xOptimalSpread = null;
    for(var l = xCoordinatesMin; l <= xCoordinatesMax; l++) {
        var temp = 0;
        for(var m = 0; m < xCoordinates.length; m++) {
            temp += Math.abs(xCoordinates[m] - l);
        }
        if(xOptimalSpread == null || temp < xOptimalSpread) {
            xOptimalSpread = temp;
            xOptimal = l;
        }
    }
var yOptimal = 0;
var yOptimalSpread = null;
    for(var n = yCoordinatesMin; n <= yCoordinatesMax; n++) {
        var temp = 0;
        for(var p = 0; p < yCoordinates.length; p++) {
            temp += Math.abs(yCoordinates[p] - n);
        }
        if(yOptimalSpread == null || temp < yOptimalSpread) {
            yOptimalSpread = temp;
            yOptimal = n;
        }
    }
    return [xOptimal, yOptimal], ' is the ideal spot to park the taco truck.';
}
console.log(bestLocation([[2, 1], [-3, 5], [4, 0]]));