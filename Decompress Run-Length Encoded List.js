/*
https://leetcode.com/problems/decompress-run-length-encoded-list/submissions/
Runtime: 92 ms, faster than 53.10% of JavaScript online submissions for Decompress Run-Length Encoded List.
Memory Usage: 39.9 MB, less than 31.89% of JavaScript online submissions for Decompress Run-Length Encoded List.
*/

var decompressRLElist = function(nums) {
 let v =[];
 let c =0;

for(i=0;i<nums.length;i = i+2){
        c = nums[i+1].toString();
        let count = 0;
        while(count<nums[i]){
          v.push(nums[i+1])
          count++
        }
    }


   return (v)
};
