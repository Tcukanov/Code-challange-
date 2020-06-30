//https://leetcode.com/problems/complement-of-base-10-integer/


return parseInt(N.toString(2).split("").map((x)=>x==1 ? 0: 1).join(""),2);
