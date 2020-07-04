/**
https://leetcode.com/problems/self-dividing-numbers
Runtime: 80 ms, faster than 48.48% of JavaScript online submissions for Self Dividing Numbers.
Memory Usage: 36.7 MB, less than 62.82% of JavaScript online submissions for Self Dividing Numbers.
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let nA = []
  let v,m;
  for(i=left;i<=right;i++){
         v = i.toString();
         m = true;
         for(j=0;j<v.length;j++){
            if(i%v[j]!==0 ){
                m = false;
              }
            }
            if(m){
               nA.push(v);
            }
}
return(nA)
};
