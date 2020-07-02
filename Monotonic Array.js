/**
https://leetcode.com/problems/monotonic-array/submissions/
*/

var isMonotonic = function(A) {
    let dec = true;
    let inc = true;

    for(let i=0;i<A.length;i++){
        if (A[i]<A[i+1]) dec = false;
        else if (A[i]>A[i+1]) inc = false;
        else if (A[i]==A[i+1]) continue;
        }
    return dec || inc

};
