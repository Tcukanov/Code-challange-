/*
https://leetcode.com/problems/running-sum-of-1d-array/
Runtime: 60 ms, faster than 98.66% of JavaScript online submissions for Running Sum of 1d Array.
Memory Usage: 35.4 MB, less than 100.00% of JavaScript online submissions for Running Sum of 1d Array.
*/
var runningSum = function(nums) {
    for(i=1;i<nums.length;i++){
        nums[i]=nums[i-1]+nums[i]
    }
    return nums
};
