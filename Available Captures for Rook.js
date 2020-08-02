/**
https://leetcode.com/problems/available-captures-for-rook/
Runtime: 76 ms, faster than 31.01% of JavaScript online submissions for Available Captures for Rook.
Memory Usage: 36.7 MB, less than 20.00% of JavaScript online submissions for Available Captures for Rook.
 */
var numRookCaptures = function(board) {
let row,col,arr;
let hash = {right:'',left:'',up:'',down:''};
let count= 0;


loop:
for(let i = 0; i<board.length;i++){
  for(j=0;j<board[i].length;j++){
      if (board[j][i]==="R"){
        row = j
        col = i
        break loop
      }
  }
}

let left = col-1, right= col+1,up=row-1,down=row+1

while (hash.up=='' || hash.down=='' ||  hash.left=='' || hash.right==''){

     if (!hash.left && board[row][left]!="."){
         hash.left = board[row][left]
      }
     if ((!hash.right && board[row][right]!=".") || (right===7 && !hash.right)){
               hash.right = board[row][right]
      }
     if ((!hash.up && board[up][col]!=".") || (up===0 && !hash.up)){
               hash.up = board[up][col]
      }
     if ((!hash.down && board[down][col]!=".") || (down===7 && !hash.down)){
               hash.down = board[down][col]
      }

     left--,up--,right++,down++;

}



for(i in hash){
  if (hash[i]=="p"){
    count ++
  }
}
      return(count)


};
