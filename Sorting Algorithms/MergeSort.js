function mergeSort(nums) {
    if (nums.length <= 1) return nums;
    let middle = Math.floor(nums.length / 2);
    let leftSide = mergeSort(nums.slice(0, middle));
    let rightSide = mergeSort(nums.slice(middle));
    return mergeSortedArrays(leftSide, rightSide);
}

function mergeSortedArrays(array1, array2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] <= array2[j]) {
            mergedArray.push(array1[i]);
            i++;
        } else {
            mergedArray.push(array2[j]);
            j++;
        }
    }

    while (i < array1.length) {
        mergedArray.push(array1[i]);
        i++;
    }

    while (j < array2.length) {
        mergedArray.push(array2[j]);
        j++;
    }

    return mergedArray;
}

let array = [5,3,7,8,1,9,12];
console.log(mergeSort(array));