/**
Runtime: 80 ms, faster than 49.01% of JavaScript online submissions for Find Winner on a Tic Tac Toe Game.
Memory Usage: 38.1 MB, less than 8.60% of JavaScript online submissions for Find Winner on a Tic Tac Toe Game.
 */
var tictactoe = function(moves) {

  let winningMoves = [
 [[0,0],[0,1],[0,2]],[[0,0],[1,0],[2,0]],[[0,0],[1,1],[2,2]],[[0,1],[1,1],[2,1]],[[0,2],[1,1],[2,0]],[[0,2],[1,2],[2,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]]];
  let count;
  let A = [];
  let B = [];
  
  for (i = 0; i < moves.length; i++) {
    if (i % 2 == 0) {
      A.push(moves[i])
    } else {
      B.push(moves[i])
    }
  }
  A = A.sort();
  B = B.sort();

  for (i = 0; i < winningMoves.length; i++) {
    count = 0
    for (j = 0; j < winningMoves[i].length; j++) {
      for (k = 0; k < A.length; k++) {
        if (winningMoves[i][j][0] === A[k][0] && winningMoves[i][j][1] === A[k][1]) {
          count++
        }
      }
    }

    if (count == 3) {
      return ('A')
    }
  }

  if (B.length >= 3) {
    for (i = 0; i < winningMoves.length; i++) {
      count = 0
      for (j = 0; j < winningMoves[i].length; j++) {
        for (k = 0; k < B.length; k++) {
          if (winningMoves[i][j][0] === B[k][0] && winningMoves[i][j][1] === B[k][1]) {
            count++
          }
        }
      }
      if (count == 3) {
        return ('B')
      }
    }
  }



  if (moves.length < 9) {
    return ("Pending")
  } else {
    return ('Draw')
  }

};
