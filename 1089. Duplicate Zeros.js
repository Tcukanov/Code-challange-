/**
https://leetcode.com/problems/duplicate-zeros/submissions/
Runtime: 108 ms, faster than 30.63% of JavaScript online submissions for Duplicate Zeros.
Memory Usage: 37.6 MB, less than 65.68% of JavaScript online submissions for Duplicate Zeros.
 */
var duplicateZeros = function(arr) {

  for(i=0;i<arr.length;i++){
    if(arr[i]===0){
      for(k=arr.length-1;k>=i+1;k--){
         arr[k]=arr[k-1]
      }
      i++
    }
  }
};
