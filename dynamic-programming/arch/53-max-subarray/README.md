# 53. Maximum Subarray

AR: M50
KEYS: dynamic programming

https://leetcode.com/problems/maximum-subarray/
https://leetcode.com/explore/learn/card/dynamic-programming/633/common-patterns-continued/4140/
Kadane's Algorithm

Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.

A subarray is a contiguous part of an array.


### Approach 1: Optimized Brute Force

### Approach 2: Dynamic Programming, Kadane's Algorithm
```
msa X -> r
  for r=y=x0, x[1,n) y=max(x,x+y)  r=max(r,y)
```
### Approach 3: Divide and Conquer (Advanced)