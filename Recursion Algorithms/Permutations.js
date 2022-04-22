function allPermutations(nums) {
    const permutation = [];

    const helper = function (nums, i) {
        if (i === nums.length - 1) {
            permutation.push(nums.slice());
            return;
        }
        for (let j = i; i < nums.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            helper(nums, i + 1);
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }


    }
    helper(nums, 0);
    return permutation;
}

console.log(allPermutations([1,2]))