/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var i = 0, j = 1;
    if (nums.length == 0) return 0;

    while (i < nums.length) {
        if (nums[i] == nums[j]) {
            nums.splice(j, 1);
        } else {
            i++;
            j = i + 1;
        }
    }
    return nums.length;
};


nums = [1, 1, 2];
console.log(removeDuplicates(nums)); //2

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums)); // 5