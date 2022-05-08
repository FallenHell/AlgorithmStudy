var plusOne = function(digits) {
    let index = digits.length - 1;
    
    while(index >= 0 && digits[index] == 9){
        digits[index] = 0;
        index --;
    }
    
    if (index<0){
        digits.unshift(1)
    }else{
        digits[index]++
    }
    
    return digits
};

let array = [1,2,9];
console.log(plusOne(array));