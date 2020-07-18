/*
https://leetcode.com/problems/group-anagrams/submissions/
Runtime: 128 ms, faster than 68.53% of JavaScript online submissions for Group Anagrams.
Memory Usage: 49.1 MB, less than 19.50% of JavaScript online submissions for Group Anagrams.
*/


var groupAnagrams = function(strs) {
    let hashMap ={}
    for (i=0;i<strs.length;i++) {
        let key = [...strs[i]].sort().join('');
        if (!hashMap[key])
            hashMap[key] = [];
        hashMap[key].push(strs[i]);
    }
 return (Object.values(hashMap))

};
