/*
https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/submissions/
Runtime: 60 ms, faster than 86.35% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
Memory Usage: 33.5 MB, less than 93.59% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
*/

var busyStudent = function(startTime, endTime, queryTime) {
    let b =0;
    for(i=0;i<startTime.length;i++){
        if (startTime[i]<=queryTime && endTime[i]>=queryTime){
            b++
        }
    }
    return b
};

/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Number of Students Doing Homework at a Given Time.
Memory Usage: 39.5 MB, less than 30.13% of Java online submissions for Number of Students Doing Homework at a Given Time.
*/
