Runtime: 51 ms, faster than 87.79% of Python3 online submissions for Integer to Roman.
Memory Usage: 14 MB, less than 38.35% of Python3 online submissions for Integer to Roman.
https://leetcode.com/problems/integer-to-roman/
class Solution:
    def intToRoman(self, num: int) -> str:
        number = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
        s = ["I", "IV", "V", "IX", "X", "XL",
            "L", "XC", "C", "CD", "D", "CM", "M"]
        i = len(number)-1
        sum = ""
        while num:
            div = num // number[i]
            num %= number[i]
            while div:
                sum += s[i]
                div -= 1
            i -= 1
        return(sum)
     
