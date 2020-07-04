/*
https://leetcode.com/problems/robot-return-to-origin/submissions/
Runtime: 76 ms, faster than 61.19% of JavaScript online submissions for Robot Return to Origin.
Memory Usage: 37.6 MB, less than 26.63% of JavaScript online submissions for Robot Return to Origin.
*/
var judgeCircle = function(moves) {

let totalX = totalY = 0
for(i=0;i<moves.length;i++){

        if (moves[i]== 'L' || ){
           totalR = totalR +1
       }
       else if (moves[i]== 'R'){
           totalR = totalR -1
       }
        else if (moves[i]== 'U'){
           totalU = totalU +1
       }
         else if (moves[i]== 'D'){
           totalU = totalU -1
       }

}
if (totalU || totalR){
  return false
}
   return true
   }
