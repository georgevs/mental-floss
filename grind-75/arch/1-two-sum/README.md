# 1. Two Sum 

https://leetcode.com/problems/two-sum/description/  
AR: E50  
KEYS: array, hash table  


Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Approach 1: Brute Force
```
TS: X k -> i j =
  for i=[0,n) j=[i+1,n) if xi+xj=k ret
```
Approach 2: Two-pass Hash Table
```
TS: X k -> i j =
  D={xi -> i}
  for j=[0,n) i=D[k-xj] if i!=j ret
```
Approach 3: One-pass Hash Table
```
TS: X k -> i j =
  for i=[0,n) j=D[k-xi] if i!=j ret; D[xi]=i
```
