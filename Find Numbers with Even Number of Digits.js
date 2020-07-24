/**
https://leetcode.com/problems/find-numbers-with-even-number-of-digits/submissions/
Runtime: 68 ms, faster than 88.93% of JavaScript online submissions for Find Numbers with Even Number of Digits.
Memory Usage: 37.4 MB, less than 19.02% of JavaScript online submissions for Find Numbers with Even Number of Digits.
 */
var findNumbers = function(nums) {
let count = 0;
let arr = [];

    for (let i=0;i<nums.length;i++){
     nums[i]=nums[i].toString()
     if(nums[i].length%2===0){
       count++
     }
    }

return(count)
};
