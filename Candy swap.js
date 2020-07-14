/*
https://leetcode.com/problems/fair-candy-swap/
Runtime: 800 ms, faster than 18.62% of JavaScript online submissions for Fair Candy Swap.
Memory Usage: 40.4 MB, less than 46.34% of JavaScript online submissions for Fair Candy Swap.
*/

var fairCandySwap = function(A, B) {

let sumA = 0;
let sumB = 0;

    for(i=0;i<A.length;i++){
          sumA+= A[i]
    }
    for(i=0;i<B.length;i++){
        sumB += B[i]
        }

    for(k=0;k<A.length;k++){
        for(l=0;l<B.length;l++){
          if(sumA - A[k] + B[l] == sumB - B[l] + A[k]){
             return ([A[k],B[l]])
          }
    }
}
};
