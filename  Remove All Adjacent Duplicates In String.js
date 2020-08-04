/**
 * @param {string} S
 * @return {string}
Runtime: 84 ms, faster than 85.19% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
Memory Usage: 39.1 MB, less than 100.00% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
 */
var removeDuplicates = function(S) {
   if (S.match(/(.)\1/g)) {
        return removeDuplicates(S.replace(/(.)\1/g, ''));
    }

    return S;

};
