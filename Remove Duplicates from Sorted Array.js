/*
https://leetcode.com/problems/remove-duplicates-from-sorted-array/Runtime: 116 ms, faster than 39.93% of JavaScript online submissions for Remove Duplicates from Sorted Array.
Memory Usage: 39.1 MB, less than 20.88% of JavaScript online submissions for Remove Duplicates from Sorted Array.
*/


var findLengthOfLCIS = function(nums) {
 for(i=1;i<nums.length;i++){
        if(nums[i-1]==nums[i]){
            nums.splice(i,1);
            i--
        }
    }
  return nums
