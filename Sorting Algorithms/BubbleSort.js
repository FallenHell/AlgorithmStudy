function bubbleSort(array) {
    let sorted = false;
    let counter = 0;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length - 1 - counter; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sorted = false;
            }

        }
        counter++;
    }
    return array;
}


console.log(bubbleSort([5, 4, 1, 3, 2]));