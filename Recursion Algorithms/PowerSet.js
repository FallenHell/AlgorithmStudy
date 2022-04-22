function powerSet(nums) {
    const output = [];
    const helper = function (nums, i, subset) {
        if (i === nums.length) {
            output.push(subset.slice());
            return;
        }
        helper(nums, i + 1, subset);
        subset.push(nums[i]);
        helper(nums, i + 1, subset);
        subset.pop();
    }

    helper(nums, 0,[]);

    return output;


}

console.log(powerSet([1,2,3]));