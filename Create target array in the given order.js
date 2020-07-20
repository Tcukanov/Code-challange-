/*
https://leetcode.com/problems/create-target-array-in-the-given-order/
Runtime: 72 ms, faster than 44.19% of JavaScript online submissions for Create Target Array in the Given Order.
*/

var createTargetArray = function(nums, index) {
let b,v,g
for(i=0;i<nums.length;i++){
      g = index[i]
      v = i;
      while(i!= g){
       [nums[i],nums[i-1]]=[nums[i-1],nums[i]]
        i--
      }
    i = v
}
             return(nums)
};

/* JAVA
Runtime: 0 ms, faster than 100.00% of Java online submissions for Create Target Array in the Given Order.
*/

class Solution {
    public int[] createTargetArray(int[] nums, int[] index) {
         int b,v,g,m;

for(int i=0;i<nums.length;i++){
      g = index[i];
      v = i;
      while(i!= g){
        m = nums[i-1];
        nums[i-1] = nums[i];
        nums[i] = m;
        i--;
      }
    i = v;
}
             return(nums);
    }
}
