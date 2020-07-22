/**
https://leetcode.com/problems/minimum-index-sum-of-two-lists/submissions/
599. Minimum Index Sum of Two Lists

Runtime: 148 ms, faster than 31.52% of JavaScript online submissions for Minimum Index Sum of Two Lists.
Memory Usage: 42 MB, less than 94.92% of JavaScript online submissions for Minimum Index Sum of Two Lists.
 */
var findRestaurant = function(list1, list2) {

let index = list1.length+list2.length;
let restaraunt = []
for(i=0;i<list1.length;i++){
        for(j=0;j<list2.length;j++){
            if(list1[i]==list2[j] && index >= i+j){
               index = i+j
               restaraunt.push(list1[i])

            }
        }
}
                return(restaraunt)
};
