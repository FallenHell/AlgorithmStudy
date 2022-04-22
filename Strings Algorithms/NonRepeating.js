input = "abAAIac";

function nonRepeating(string) {
    let repeat;
    for (let i = 0; i < string.length; i++) {
        repeat = false;
        for (let j = 0; j < string.length; j++) {
            if (string[i] === string[j] && i !== j) {
                repeat = true;
            }

        }
        if (repeat === false) {
            return i;
        }
    }

    return null;
}

function nonRepeatingHash(string) {
    let hashTable = {};
    for (let i = 0; i < string.length; i++) {
        if (string[i] in hashTable) {
            hashTable[string[i]]++;
        } else {
            hashTable[string[i]] = 1;
        }
    }

    for (let i = 0; i < string.length; i++){
        if (hashTable[string[i]]==1){
            return i;
        }
    }
    return null;
}

console.log(nonRepeatingHash(input));