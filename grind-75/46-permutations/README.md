# 46. Permutations

https://leetcode.com/problems/permutations/  
AR: 77M  
KEYS: array, backtracking  

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Constraints:
- 1 <= nums.length <= 6
- -10 <= nums[i] <= 10
- All the integers of nums are unique.

### Solution
Use recursion to insert the head of X in all possible indexes of all permutations of the tail of X
```
perm X -> Y   X: {x} Y: {[x]}
  Y <- ins x0 perm X\x0
ins x Y -> Y'
  for X<-Y, n=|X|, i<=0:n  Y' <- X[0:i] + x + X[i:n] 
```
