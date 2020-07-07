/*
https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/submissions/
Runtime: 60 ms, faster than 87.18% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
Memory Usage: 35.1 MB, less than 36.19% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
*/

var numberOfSteps  = function(num) {
let b = 0;
  while(num >=1){
   if(num%2===0){
    num =num/2
   }
   else{
     num = num-1
   }
      b++
    }
    return b
};
