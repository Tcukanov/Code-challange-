/**
https://leetcode.com/problems/contains-duplicate/submissions/
Runtime: 72 ms, faster than 93.33% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 38.7 MB, less than 84.32% of JavaScript online submissions for Contains Duplicate.
 */
var containsDuplicate = function(nums) {
    nums.sort()
    for(i=0;i<nums.length;i++){
       if(nums[i]==nums[i+1]){
           return true
       }
    }
    return false
};

var containsDuplicate = function(nums) {
    let arr = new Map()
    for(i of nums){
        if(arr[i]){
            return true
        }
        else{
            arr[i] = 1
        }
    }
    return false
};
