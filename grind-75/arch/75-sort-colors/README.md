# 57. Sort colors

https://leetcode.com/problems/sort-colors/  
AR: 60M  
KEYS: 

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Constraints: array, dutch flag sort

- n == nums.length
- 1 <= n <= 300
- nums[i] is either 0, 1, or 2.

### Test
```
python3 ./py/sort-colors.py
gradle --project-dir java test 
go test ./go
```

