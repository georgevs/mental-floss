# 977. Squares of a Sorted Array (Easy)

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Constraints:

- 1 <= nums.length <= 10^4
- -10^4 <= nums[i] <= 10^4
- nums is sorted in non-decreasing order.

## Test
```
node test
```

## Performance
```
seq 5 | xargs -L1 time node sorted-squares-1 2000000
seq 5 | xargs -L1 time node sorted-squares-2 2000000
seq 5 | xargs -L1 time node sorted-squares-3a 2000000
seq 5 | xargs -L1 time node sorted-squares-3b 2000000
seq 5 | xargs -L1 time node sorted-squares-3c 2000000
```
