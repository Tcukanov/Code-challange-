/*
https://leetcode.com/problems/ransom-note/
Runtime: 84 ms, faster than 78.00% of JavaScript online submissions for Ransom Note.
Memory Usage: 40 MB, less than 26.01% of JavaScript online submissions for Ransom Note.
*/

var canConstruct = function(ransomNote, magazine) {
 ransomNote = ransomNote.split("");
 magazine = magazine.split("")
 for(i=0;i<ransomNote.length;i++){
       let con = false
       for(j=0;j<magazine.length;j++){
           if(ransomNote[i]==magazine[j]){
              magazine[j] = ''
              con = true
              break
              }
       }
        if (!con){ return false}
    }
    return true
};
