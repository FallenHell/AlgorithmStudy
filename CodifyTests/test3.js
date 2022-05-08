function solution(N) {
    if (N > 0) {
        let inputToArray = String(N).split("").map((N) => {
            return Number(N);
        })
        for (let i = 0; i < inputToArray.length; i++) {
            if (inputToArray[i] == '5') {
                inputToArray.splice(i, 1);
                break;
            }
        }
        let result = parseInt(inputToArray.join(""));
        return result;
    } else {
        let inputToArray = String(Math.abs(N)).split("").map((N) => {
            return Number(N);
        })
        for (let i = inputToArray.length - 1; i >= 0; i--) {
            if (inputToArray[i] == '5') {
                inputToArray.splice(i, 1);
                break;
            }
        }
        let result = parseInt(inputToArray.join(""));
        if (result == 0) {
            return 0;
        } else {
            return -Math.abs(result);
        }
    }


}

let N = -5000
console.log(solution(N));