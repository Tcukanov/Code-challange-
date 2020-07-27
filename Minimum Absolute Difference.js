/**
https://leetcode.com/problems/minimum-absolute-difference/
Runtime: 156 ms, faster than 83.04% of JavaScript online submissions for Minimum Absolute Difference.
Memory Usage: 47.1 MB, less than 100.00% of JavaScript online submissions for Minimum Absolute Difference.
 */
var minimumAbsDifference = function(arr) {
 arr = arr.sort(function(a, b){return a - b})
 let araa =[];
 let min= arr[arr.length-1]

    for(i=0;i<arr.length;i++){

        if(arr[i+1]-arr[i] <=min ){
            min = arr[i+1] - arr[i]
        }
    }

    for(i=0;i<arr.length;i++){
      if (arr[i+1]-arr[i]==min){
          araa.push([arr[i],arr[i+1]])
      }
    }
    return araa
};
