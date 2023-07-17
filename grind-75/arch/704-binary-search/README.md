# 704. Binary Search

https://leetcode.com/problems/binary-search/  
AR: E56  
KEYS: arrya, binary search  

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Constraints:

- 1 <= nums.length <= 10^4
- -10^4 < nums[i], target < 10^4
- All the integers in nums are unique.
- nums is sorted in ascending order.

Approach 1: Find the Exact Value
```
binary-search: X k -> i =
  for l=0, r=n, l<r  i=(l+r)/2  if xi==k ret; if k<xi r=i; l=i+1
  ret -1
```

Approach 2: Find Upper bound
