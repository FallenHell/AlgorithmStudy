function isPalindromeAppend(string){
    var newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    if (newString.normalize() === string.normalize()) return true
    else return false;
}

function isPalindromeArray(string){
    var arrayString = [];
    for (let i = string.length - 1; i >= 0; i--) {
        arrayString.push(string[i]);
    }
    if (arrayString.join('') === string) return true
    else return false;
}

function isPalindromePerformatic(string){
    let initialPointer = 0;
    let finalPointer = string.length - 1;
    let output = true;

    while(initialPointer <= finalPointer){
        if(string[initialPointer] == string[finalPointer]){
            initialPointer++; 
            finalPointer--;
        }
        else return false;
    }

    return output;
}

console.log(isPalindromePerformatic('abcba'));