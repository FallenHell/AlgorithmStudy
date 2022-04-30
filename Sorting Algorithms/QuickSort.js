//Quick sorte recursively lower sized

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function partition(array, start = 0, end = array.length - 1) {
    let middle = Math.floor((start + end) / 2);
    swap(array, start, middle);

    let pivot = array[start];
    let i = start + 1;
    let j = end;

    while (i <= j) {
        while (array[i] <= pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i < j) {
            swap(array, i, j);
        }
    }
    swap(array, start, j);
    return j;
}

// function quickSort(array, start = 0, end = array.length - 1) {
//     while (start < end) {
//         let pivotIdx = partition(array, start, end);
//         if (pivotIdx - start < end - pivotIdx) {
//             quickSort(array, start, pivotIdx - 1);
//         } else {
//             quickSort(array, pivotIdx + 1, end);
//             end = pivotIdx - 1;
//         }
//     }
// }



function quickSort(array, start=0, end=array.length-1){
    if(start < end){
        let pivotIdx = partition(array, start, end);
        quickSort(array, start, pivotIdx-1);
        quickSort(array, pivotIdx+1, end);
    }
    return array;
}

let array = [3, 6, 4, 8, 2, 1, 9, 10];
console.log(quickSort(array))