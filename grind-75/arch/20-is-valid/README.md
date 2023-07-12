# 20. Valid Parentheses

https://leetcode.com/problems/valid-parentheses/  
AR: E50  
KEYS: string, stack  

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if: 
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

Approach 1: Stacks
```
IV: X -> t =
  D={ '{[(' -> ')]}' }
  for x if y==D[x] S<-y;
        y<-S if y!=x ret F
  ret |S|==0
```
  