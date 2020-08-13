/**
https://leetcode.com/problems/remove-palindromic-subsequences/submissions/
Runtime: 64 ms, faster than 89.41% of JavaScript online submissions for Remove Palindromic Subsequences.
Memory Usage: 36.6 MB, less than 16.47% of JavaScript online submissions for Remove Palindromic Subsequences.
Next challenges:
 */
var removePalindromeSub = function(s) {
 if (s.length === 0) return 0;

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            return 2;
        }
    }

    return 1;
}
