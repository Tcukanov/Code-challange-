/*
https://leetcode.com/problems/valid-anagram/submissions/
Runtime: 92 ms, faster than 51.66% of JavaScript online submissions for Valid Anagram.

*/

var isAnagram = function(s, t) {
    let hashS = {};
    let hashT = {};
    if(s.length!==t.length) return false

    for(let i=0;i<s.length;i++){
        hashS[s[i]] =  hashS[s[i]] +1 || 1
        hashT[t[i]] =  hashT[t[i]] +1 || 1

    }
     for (const j in hashS) {
        if (hashS[j] !== hashT[j]) return false;
    }
        return true;



};
