// method 1 - recursively call

function fibonacci(n){
    if (n <= 1) return n;
    else return fibonacci(n-1) + fibonacci(n-2);
}

//console.log(fibonacci(40));


// method 2 - Recursion + HashTable

function fibonacciHashTable(n) {
    const ht = {0:1, 1:1};
    if (n in ht){
        return ht[n];
    }else{
        ht[n] = fibonacci(n-1) + fibonacci(n-2);
        return ht[n];
    }
}

// console.log(fibonacciHashTable(8))

// Method 3 - iteration

function fibonacciIteration(n) {
    if (n<=1) return n;
    let counter = 1;
    let prev = 0;
    let curr = 1;
    let next;

    while (counter < n){
        next = prev + curr;
        prev = curr;
        curr = next;
        counter++;
    }

    return curr;
}

console.log(fibonacciIteration(8))