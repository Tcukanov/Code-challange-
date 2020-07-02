/**
https://leetcode.com/problems/majority-element/submissions/

Runtime: 72 ms, faster than 41.54% of JavaScript online submissions for Majority Element.
 */
 
var majorityElement = function(nums) {
let hash = {}
let max=0;
let num=0;

  for(let i=0;i<nums.length;i++){

    if(hash[nums[i]]){
      hash[nums[i]]+=1
        if (max<hash[nums[i]]){
        max = hash[nums[i]]

        }
    }
    else{
      hash[nums[i]] = 1
    }
  }
   if (nums.length==1){
    return nums
  }
  return Object.keys(hash)[Object.values(hash).indexOf(max)];


};
