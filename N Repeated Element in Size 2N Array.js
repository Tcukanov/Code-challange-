/**
https://leetcode.com/problems/n-repeated-element-in-size-2n-array/submissions/
Runtime: 72 ms, faster than 74.29% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
Memory Usage: 36.2 MB, less than 96.40% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
*/


var repeatedNTimes = function(A) {
    let nwArr = [];
    let hMap = {}
    for(i=0;i<A.length;i++){
        if(hMap[A[i]]){
            return A[i]
        }
        else{
            hMap[A[i]] = 1
        }
    }
};
