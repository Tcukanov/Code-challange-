/**
https://leetcode.com/problems/flipping-an-image/submissions/
Runtime: 76 ms, faster than 77.35% of JavaScript online submissions for Flipping an Image.
Memory Usage: 38.8 MB, less than 8.77% of JavaScript online submissions for Flipping an Image.
 */
 
var flipAndInvertImage = function(A) {
    let par = [];

    for(i of A){
      let str =[];
        for(j=i.length-1;j>=0;j--){

           if(i[j]==1){
             i[j]=0
           }
           else{
             i[j]=1
           }

           str.push(i[j])

         }

         par.push(str)
     }
   return(par)
};
