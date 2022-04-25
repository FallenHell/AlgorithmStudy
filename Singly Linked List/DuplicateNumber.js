let array = [1,4,3,2,3];
function detectDuplicateNumber(array){
    let hare = 0;
    let tortoise = 0;

    while (true) {
        hare = array[array[hare]];
        tortoise = array[tortoise];

        if(hare === tortoise){
            let pointer = 0;
            while (pointer !== tortoise) {
                pointer = array[pointer];
                tortoise = array[tortoise];

            }
            return pointer;
        }
    }
}

console.log(detectDuplicateNumber(array));