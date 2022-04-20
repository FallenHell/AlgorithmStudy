function RotateArray(array, k){
    const length = array.length;
    k = k % length;
    const temp = array.slice(length - k);
    console.log(temp)
    for (let i = length - k - 1; i >= 0; i--) {
        array[i+k] = array[i];
    }
    for (let i = 0; i < k; i++) {
        array[i] = temp[i];
    }
    return array;

}

a = [1,2,3,4,5];
b = [5,4,3,2,1];
c = [10,9,8,7,6];

console.log(RotateArray(a, 2));