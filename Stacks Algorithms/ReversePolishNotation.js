function revPolNot(tokens){
    const stack = [];
    const validOperator = {
        '+':(n1,n2)=>n1+n2,
        '-':(n1,n2)=>n1-n2,
        '*':(n1,n2)=>n1*n2,
        '/':(n1,n2)=>Math.trunc(n1/n2),
    };

    for (let token of tokens) {
        if(validOperator[token]){
            let n2 = stack.pop();
            let n1 = stack.pop();
            let result = validOperator[token](n1,n2);
            stack.push(result);
        }else{
            stack.push(parseInt(token));
        }
    }

    return stack.pop();
}

console.log(revPolNot(['4','13','5','/','+']));