// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif


// Steps:
// 1. Pick an item out of the arr to be your pivot value
//   - usually the middle item or the last item
// 2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
//    and all values greater than the pivot are to the right (not perfectly sorted)
// 3. return: new idx of the pivot value

// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partition


// function Partition(arr, left = 0, right = arr.length - 1){
    
    // }
    
    const arr = [66, 42, 1, 66, 700, 65, 44, 21, 0, 66, 66]
    
    function quickSort(arr){
        if(arr.length <= 1) {
            return arr
        }
        const pivot = arr[arr.length-1]
        const left = []
        const right = []
        for(let i = 0; i < arr.length-1; i++){
            if(arr[i] < pivot) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
    
        return (quickSort(left)).concat(pivot, quickSort(right))
    }
    console.log(quickSort(arr))
    
    // function quickSort(arr, left = 0, right = arr.length - 1){
        //     if(arr.length <= 1) {
            //         return arr
            //     }
            //     let pivot = Math.floor(arr.length/2)
            //     console.log(`Array pre-push`, arr)
            //     arr.push(arr[pivot])
            //     console.log('arr post push:', arr)
            //     while(left <= right) {
                //         if(arr[left] <= arr[pivot]) {
                    //             left++
                    //         } else {
                        //             var tempLeft = arr[left]
                        //         }
                        //         if(arr[right] > arr[pivot]) {
                            //             right--
                            //         } else {
                                //             var tempRight = arr[right]
                                //         }
                                //         if(tempLeft && tempRight) {
                                    //             let temp = tempLeft
                                    //             tempLeft = tempRight
                                    //             tempRight = temp
                                    //         }
                                    //         let temp = arr[right]
                                    //         arr[right] = pivot
                                    //         arr[pivot] = temp
                                    //         console.log(arr[pivot], arr[right])
                                    //         return arr
                                    //     }
                                    // }
                                    // console.log(quickSort(arr))
                                    
                                    

