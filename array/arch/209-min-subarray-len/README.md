# 209. Minimum Size Subarray Sum

- https://leetcode.com/problems/minimum-size-subarray-sum/
- https://leetcode.com/explore/learn/card/array-and-string/205/array-two-pointer-technique/1299/

Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Constraints:

- 1 <= target <= 10^9
- 1 <= nums.length <= 10^5
- 1 <= nums[i] <= 10^4

## Test
```
node test
```

## Performance
Notice that for big N performance deteriorates dramatically
```
seq 5 | xargs -L1 time node min-subarray-len-1 1000000
seq 5 | xargs -L1 time node min-subarray-len-2a 1000000
seq 5 | xargs -L1 time node min-subarray-len-2b 1000000
```
