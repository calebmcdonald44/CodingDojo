const insertionSort = (arr) => {
    for (let i = 1; i < arr.length - 1; i++) {
        let j = i;
        while (arr[j] < arr[j - 1]) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            j--;
        } 
    }
    return arr;
}