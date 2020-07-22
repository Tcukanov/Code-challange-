/*
https://leetcode.com/problems/sort-array-by-parity-ii/
Runtime: 116 ms, faster than 46.87% of JavaScript online submissions for Sort Array By Parity II.
*/


var sortArrayByParityII = function(A) {
  let even =[];
  let result = [];
  let odd = [];
  for(let i=0;i<A.length;i++){
    if(A[i]%2==0){
        even.push(A[i])
    }
        else{
        odd.push(A[i])
        }

}
    for(j=0;j<even.length;j++){
      result.push(even[j],odd[j])
    }
        return result;
    };
