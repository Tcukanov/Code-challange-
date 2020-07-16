/*
https://leetcode.com/problems/longest-continuous-increasing-subsequence
Runtime: 64 ms, faster than 80.04% of JavaScript online submissions for Longest Continuous Increasing Subsequence.
Memory Usage: 36.4 MB, less than 37.17% of JavaScript online submissions for Longest Continuous Increasing Subsequence.
*/
var findLengthOfLCIS = function(nums) {

    let count = 1 ;
    let max = 1 ;

   if (nums.length == 0) {return 0}


    for( let i = 1 ; i < nums.length  ; i++ ) {
        if(nums[i-1]<nums[i]){
            count++;
        }
        else{
            if(max<count){
            max = count
                   }
            count= 1
        }
    }

      if(max>count) {
          return max
      }
    else{
        return count
    }
};
