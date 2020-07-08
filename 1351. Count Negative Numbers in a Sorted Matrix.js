/*
Runtime: 1 ms, faster than 55.35% of Java online submissions for Count Negative Numbers in a Sorted Matrix.
Memory Usage: 40.4 MB, less than 24.18% of Java online submissions for Count Negative Numbers in a Sorted Matrix.


/*
https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
Count Negative Numbers in a Sorted Matrix
Runtime: 64 ms, faster than 78.70% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
Memory Usage: 37 MB, less than 24.37% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
Next challenges:
*/
var countNegatives = function(grid) {
    let b =0;
for(let i=0;i<grid.length;i++){
let num = grid[i];
  for(let j=0;j<num.length;j++){
    if(num[j]<0){
      b++;
    }
  }

}
   return b;

};
