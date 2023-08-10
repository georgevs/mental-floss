# 238. Product of Array Except Self

https://leetcode.com/problems/product-of-array-except-self/description/  
AR: M65  
KEYS: array, prefix sum  

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Constraints:

- 2 <= nums.length <= 105
- -30 <= nums[i] <= 30
- The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

### Approach 1: Left and Right product lists
```
product-except-self: X -> Y =
  for L0=1,   i=[1,n)   Li=Li-1*Xi-1
  for Rn-1=1, i=[n-2,0] Ri=Ri+1*Xi+1
  for i=[0,n) Yi=Li*Ri
```
### Approach 2: O(1) space approach
```
product-except-self: X -> L =
  for L0=1, i=[1,n)  Li=Li-1*Xi-1
  for r=1,  i=(n,0]  Li*=r, r*=Xi
```