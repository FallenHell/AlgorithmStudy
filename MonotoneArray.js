function checkMonotone(array){
    let first = array[0];
    let last = array[array.length - 1];

    if (first == last){
        for (let i = 0; i < array.length - 1; i++) {
            if(array[i+1] !== array[i]) return false;
        }
    }
    else if ( first < last){
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i+1] < array[i]) return false;
        }
    }else {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i+1] > array[i]) return false;
        }
    }

    return true;
}

a = [3,3,3,3,3];
b = [4];
c = [1,2,3,4,5];
d = [5,4,3,2,1];

console.log(checkMonotone(a));
console.log(checkMonotone(b));
console.log(checkMonotone(c));
console.log(checkMonotone(d));
