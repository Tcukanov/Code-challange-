/*
Runtime: 72 ms, faster than 93.97% of JavaScript online submissions for Shuffle the Array.
Memory Usage: 38.7 MB, less than 100.00% of JavaScript online submissions for Shuffle the Array.
*/

var shuffle = function(nums, n) {
    let newArr = [];
    for(i=0,j=n;i<n;i++,j++){
        newArr.push(nums[i])
        newArr.push(nums[j])
    }
    return newArr
}
