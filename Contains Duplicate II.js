/**
 Contains Duplicate II
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
Runtime: 96 ms, faster than 49.47% of JavaScript online submissions for Contains Duplicate II.
Memory Usage: 44 MB, less than 11.11% of JavaScript online submissions for Contains Duplicate II.
 */
var containsNearbyDuplicate = function(nums, k) {

var hashMap = {};
for (var i = 0; i < nums.length; i++) {
    if (typeof hashMap[nums[i]] !== undefined ) {
        if (i - hashMap[nums[i]] <= k) return true;
    }
    hashMap[nums[i]] = i;

}
return false;
};
