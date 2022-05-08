function solution(A) {
    let sortedArray = SortArrayAndRemoveDuplicates(A);
    let minimumValue = 1;
    for(let i = 0; i < A.length; i++){
        if(minimumValue === sortedArray[i]){
            minimumValue++;
        }else{
            return minimumValue;
        }
    
} }
   

function SortArrayAndRemoveDuplicates(a){
    let output = a.sort(function(a,b){return a-b});
    let chars = output;
    let uniqueChars = [...new Set(chars)];
    return uniqueChars;
}

console.log(solution([1,2,3]));