
function findKFactor(array, k){
    let newArray = array.sort((a,b)=>{return a+b});
    newArray = newArray.reverse();
    return newArray[k];
}


function findKFactorOptimal(array,k){
    const ht = {};
    for (let i = 0; i < array.length; i++) {
        if (i===0){
            ht[i] = array[i];
        }
        if(i > 0){
            if(ht[i-1] < array[i]){
                let temp = ht[i-1]
                ht[i-1] = array[i];
                ht[i] = temp;
            }else{
                ht[i] = array[i];
            }
        }
        
    }
    return ht;
}

let array = [1,3,-5,4,9];

console.log(findKFactorOptimal(array, 0));