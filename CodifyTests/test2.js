function solution(A) {
    var N = A.length;
    var i;
    var ht = {};
    for (i = 0; i < N; i++) {
        if (A[i] in ht) {
            ht[A[i]]+= 1;
        }
        else{
            ht[A[i]] = 1;
        }

    }
    return Object.keys(ht).length;
}

A = [4, 6, 2, 2, 6, 6, 1]; //output should be 4
console.log(solution(A));