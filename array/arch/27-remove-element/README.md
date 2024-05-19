# 27. Remove Element

https://leetcode.com/problems/remove-element
AR: E56


Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Constraints:

- 0 <= nums.length <= 100
- 0 <= nums[i] <= 50
- 0 <= val <= 100

### Solution: Two pointers
```text
remove X v -> k => for xi<-X  if xi!=v  xi~xk, k++
```
### Solution: Two pointers, swap back
```text
remove X v -> k => k=n  for i<k  if xi==v k--,xi~xk ; i++   
```
