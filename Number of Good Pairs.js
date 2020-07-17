/*
Runtime: 72 ms, faster than 80.25% of JavaScript online submissions for Number of Good Pairs.
Memory Usage: 36.7 MB, less than 100.00% of JavaScript online submissions for Number of Good Pairs.
*/

var numIdenticalPairs = function(nums) {
    let count = 0;
    let hashMap = {}
    for(i=0;i<nums.length;i++){
        if(hashMap[nums[i]]){
           count+= hashMap[nums[i]]
           hashMap[nums[i]]++
           }
        else{
            hashMap[nums[i]] = 1
        }
    }
    return count
};
