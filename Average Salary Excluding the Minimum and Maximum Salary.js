/**
Runtime: 68 ms, faster than 80.00% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
Memory Usage: 36.8 MB, less than 13.33% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
 */
var average = function(salary) {
        let count = 0
       let max = Math.max(...salary)
       let min = Math.min(...salary)
    for(i=0;i<salary.length;i++){
        if(salary[i]!=min && salary[i]!=max){
            count+= salary[i]
        }
    }

    return ((count)/(salary.length-2))
};
