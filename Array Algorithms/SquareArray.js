function squareArrays(arrayNumbers){
    for (let index = 0; index < arrayNumbers.length; index++) {
        const element = arrayNumbers[index];
        arrayNumbers[index] = Math.pow(element, 2);
    }
    return arrayNumbers.sort(function(a,b){return a-b});
}

function sortedSquaredArray(arrayNumbers){
    let newArray = new Array(arrayNumbers.length).fill(0);
    let pointerLeft = 0;
    let pointerRight = arrayNumbers.length - 1;
    for (let i = arrayNumbers.length-1; i >= 0; i--) {
        const leftSquared = Math.pow(arrayNumbers[pointerLeft], 2);
        const rightSquared = Math.pow(arrayNumbers[pointerRight], 2);
        if (leftSquared > rightSquared){
            newArray[i] = leftSquared;
            pointerLeft ++;
        } else {
            newArray[i] = rightSquared;
            pointerRight --;
        }
    }

    return newArray;
}

function sortedSquaredArrayWithMap(array){
    const newArr = array.map(squaredNumber);
    function squaredNumber(number){
        return number * number;
    }
    
    return newArr.sort(function(a,b){return a-b});
}


a = [1,2,3,4];
b = [-7,-2,3,4,9];
c = [];

console.log(sortedSquaredArrayWithMap(a));
console.log(sortedSquaredArrayWithMap(b));
console.log(sortedSquaredArrayWithMap(c));
