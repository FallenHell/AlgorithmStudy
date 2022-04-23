function searchRangeRecursive(array, target) {
    const range = [-1, -1];
    findLeftExtreme(array, target, range);
    findRightExtreme(array, target, range);
    return range;
}

const findLeftExtreme = function (array, target, range, left = 0, right = array.length - 1) {
    if (left > right) return;
    const middle = Math.floor((left + right) / 2);
    if (array[middle] === target) {
        if (middle === 0) range[0] = 0;
        else if (array[middle - 1] === target) {
            findLeftExtreme(array, target, range, left, middle - 1);
        } else range[0] = middle;
    } else if (target < array[middle]) {
        findLeftExtreme(array, target, range, left, middle - 1);
    } else findLeftExtreme(array, target, rage, middle + 1, right);
}

const findRightExtreme = function (array, target, range, left = 0, right = array.length - 1) {
    if (left > right) return;
    const middle = Math.floor((left + right) / 2);
    if (array[middle] === target) {
        if (array[middle] === array.length - 1) range[1] = middle;
        else if (target === array[middle + 1]) {
            findRightExtreme(array, target, range, middle + 1, right);
        } else range[1] = middle;
    } else if (target < array[middle]) {
        findRightExtreme(array, target, range, left, middle - 1);
    } else {
        findRightExtreme(array, target, range, middle + 1, right);
    }
}


function searchRangeIterative(array, target) {
    const leftExtreme = findLeftExtremeIterative(array, target);
    const rightExtreme = findRightExtremeIterative(array, target);
    return [leftExtreme, rightExtreme];
}

function findLeftExtremeIterative(array, target) {
    let left = 0;
    let right = array.length - 1;
    let middle;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (target === array[middle]) {
            if (middle === 0) return 0;
            if (array[middle - 1] === target) right = middle - 1;
            else return middle;
        } else if (target < array[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return -1;
}

function findRightExtremeIterative(array, target) {
    let left = 0;
    let right = array.length - 1;
    let middle;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (target === array[middle]) {
            if(middle === array.length - 1) return middle;
            if (array[middle+1] === target) left = middle + 1;
            else return middle;
        } else if (target < array[middle]) {
            right = middle - 1;
        } else left = middle + 1;
    }

    return -1;
}

let array = [1,1,1,2,2,2,3,3,4,5,5,5];
console.log(searchRangeIterative(array, 3));