function compareTriplets(a, b) {
    let pointsA = 0;
    let pointsB = 0;
    let output = [];
    
    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]) pointsA++;
        if(a[i] < b[i]) pointsB++;
    }
    output.push(pointsA, pointsB);
    return output;
}

console.log(compareTriplets([5,6,7], [3,6,10]));