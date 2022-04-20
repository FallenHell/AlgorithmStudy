function getIndexBrute(array, target){
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i+1; j < array.length; j++) {
            let sum = array[i] + array[j];
            if (sum == target) return [i,j];
        }
        
    }
    return [];
}

function getIndexOptimal(array, target){
    const hash = {};
    let neededValue;

    for (let i = 0; i < array.length; i++) {
        neededValue = target - array[i];
        if (neededValue in hash){
            return [i, hash[neededValue]];
        } else {
            hash[array[i]] = i;
        }
    }
    return[];
}

console.log(getIndexBrute([2,-1,5,3], 5));