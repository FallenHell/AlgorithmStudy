function SelectionSort(nums){
    for (let i = 0; i < nums.length; i++) {
        let smallest = i;
        for (let j = i+1; j < nums.length; j++) {
            if(nums[j] < nums[smallest]) smallest = j;            
        }
        if (i!==smallest){
            let temp = nums[i];
            nums[i] = nums[smallest];
            nums[smallest] = temp;
        }
    }
    return nums;
}

console.log(SelectionSort([4,3,2,1]));