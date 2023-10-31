# 17. Letter Combinations of a Phone Number

https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/  
https://leetcode.com/explore/featured/card/recursion-ii/472/backtracking/  
AR: 58M  
KEYS: hash table, string, backtracking  

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

Constraints:
- 0 <= digits.length <= 4
- digits[i] is a digit in the range ['2', '9'].

### Solution (intuition):
```
lc X -> Y = for Y=[[]],x<-X  Y=iter x Y
iter x Y -> Y' = for z<-Zxi, y<-Y  Y'<-y+z
```
