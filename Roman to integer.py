"""Runtime: 66 ms, faster than 55.19% of Python3 online submissions for Roman to Integer.
Memory Usage: 13.9 MB, less than 80.57% of Python3 online submissions for Roman to Integer.
https://leetcode.com/problems/roman-to-integer/
""""
class Solution:
    def romanToInt(self, s: str) -> int:
        value = {
            'M': 1000,
            'D': 500,
            'C': 100,
            'L': 50,
            'X': 10,
            'V': 5,
            'I': 1
        }

        p = 0
        total = 0

        l = len(s)
        for i in range(l-1, -1, -1):
            if(value[s[i]]>=p):
                total += value[s[i]]
            else:
                total -= value[s[i]]

            p = value[s[i]]

        return(total)
