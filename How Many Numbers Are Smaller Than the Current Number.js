/*
Runtime: 100 ms, faster than 34.80% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
Memory Usage: 36.9 MB, less than 53.59% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
*/


var smallerNumbersThanCurrent = function(nums) {
    let newArr = [];
    for(i=0;i<nums.length;i++){
        let count = 0;
        for(j=0;j<nums.length;j++){
            if (nums[i]>nums[j]){
                count++
            }
        }
        newArr.push(count)
    }
    return newArr
};
