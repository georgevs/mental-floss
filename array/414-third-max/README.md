# 414. Third Maximum Number

Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

Constraints:

- 1 <= nums.length <= 10^4
- -2^31 <= nums[i] <= 2^31 - 1

## Test
```
node test
```

## Performance
```
seq 5 | xargs -L1 time node third-max-1 500000
seq 5 | xargs -L1 time node third-max-2 500000
seq 5 | xargs -L1 time node third-max-3 500000
```
