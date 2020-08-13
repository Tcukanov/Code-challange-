/**
https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/submissions/
Runtime: 72 ms, faster than 59.22% of JavaScript online submissions for Check If a Word Occurs As a Prefix of Any Word in a Sentence.
Memory Usage: 36.7 MB, less than 6.15% of JavaScript online submissions for Check If a Word Occurs As a Prefix of Any Word in a Sentence.
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let k = 0;
    let str = ''
    for(i=0;i<sentence.length;i++){
        str+=sentence[i]
        if (str===searchWord){
            return(k+1);
        }
        else if(sentence[i]===' '){
            k++
            str =''
        }
    }
   return(-1)
};
