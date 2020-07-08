/*
https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/submissions/
Runtime: 76 ms, faster than 22.30% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
Memory Usage: 33 MB, less than 97.15% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.*/

var subtractProductAndSum = function(n) {
    let b = 1
    let v = 0;
    n=n.toString()
    for(i=0;i<n.length;i++){
        b *= n[i];
        v += parseInt(n[i])
    }
    return b-v
};
