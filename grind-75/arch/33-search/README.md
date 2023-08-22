# 33. Search in Rotated Sorted Array

https://leetcode.com/problems/search-in-rotated-sorted-array/description/  
AR: M39  
KEYS: array, bsearch  

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Constraints:

- 1 <= nums.length <= 5000
- -10^4 <= nums[i] <= 10^4
- All values of nums are unique.
- nums is an ascending array that is possibly rotated.
- -10^4 <= target <= 10^4

### Approach 1: Find Pivot Index + Binary Search
### Approach 2: Find Pivot Index + Binary Search with Shift
### Approach 3: One Binary Search
```
search X x -> k =
  l,r=0,n
  for l<r,i=(l+r)/2
    if xi==x ret k=i
    if xl<xi   -- monotonic on the left
      if xl<=x<xi  r=i; l=i+1
    ;          -- monotonic is on the right
      if xi<x<=x[r-1]  l=i+1; r=i
```
### Recursive
```
search X x -> k =
  bsearch l r -> k = for l<r,i=(l+r)/2  if xi==x ret k=i; if xi<x l=i+1; r=i 
  iter l r -> k =
    if x[l]<=x<=x[r-1]  ret k=bsearch l r
    i=(l+r)/2
    if l<i,k=iter l i  ret k
    if l<i<r,k=iter i r  ret k
```
