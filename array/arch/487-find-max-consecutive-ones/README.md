# 487. Max Consecutive Ones II (Medium)

Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.

Constraints:

- 1 <= nums.length <= 10^5
- nums[i] is either 0 or 1.

## Test
```
node test
```

## Performance
```
seq 5 | xargs -L1 time node find-max-consecutive-ones-1 100000
seq 5 | xargs -L1 time node find-max-consecutive-ones-2 100000
seq 5 | xargs -L1 time node find-max-consecutive-ones-3 100000
```
