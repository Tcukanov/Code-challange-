/**
https://leetcode.com/problems/find-the-difference/submissions/
Runtime: 72 ms, faster than 88.45% of JavaScript online submissions for Find the Difference.
Memory Usage: 39 MB, less than 9.09% of JavaScript online submissions for Find the Difference.
 */
var findTheDifference = function(s, t) {
    let map = {}

    for(i of s){
         if(map[i]){
             map[i]++
         }
        else{
            map[i] = 1
        }
    }
    for (i of t){
         if(map[i]){
             map[i]--
         }
        else{
            return i
        }
    }

};
