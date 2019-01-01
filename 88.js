var merge = function (nums1, m, nums2, n) {

    var i = m - 1, j = n - 1, k = m + n - 1;

    while (i >= 0 && j >= 0) {
        nums1[k--] = (nums1[i] >= nums2[j]) ? nums1[i--] : nums2[j--];
    }

    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }

};


var nums1 = [1, 2, 3, 0, 0, 0], m = 3;
var nums2 = [2, 4, 5, 6,], n = 4;

console.log(merge(nums1, m, nums2, n)); 