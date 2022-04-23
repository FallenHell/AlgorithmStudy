function iterativeBinarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let middle;
    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (target === nums[middle]) return middle;
        if (target < nums[middle]) right = middle - 1;
        else left = middle + 1;
    }

    return -1;
}

function recursiveBinarySearch(nums, target) {
    const helper = function (nums, target, left, right) {
        if (left > right) return -1;
        const middle = Math.floor((left + right) / 2)
        if (target === nums[middle]) return middle;
        else if (target < nums[middle]) return helper(num, target, left, middle - 1)
        else return helper(num, target, middle + 1, right);
    }
    return helper(nums, target, 0, nums.length - 1)
}

console.log(iterativeBinarySearch([1, 2, 3, 4, 5], 3));