/* Write a function that takes in an array of integers
and returns a sorted version of that array. Use the Quick Sort algo to sort the array. */

function quickSort (array){
    quickSortHelper(array, 0, array.length - 1);
    return array;
}

function quickSortHelper(array, startIdx, endIdx){
    if (startIdx >= endIdx) return;
    const pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;
    while (rightIdx >= leftIdx){
    }
}