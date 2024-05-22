# 1089. Duplicate Zeros

https://leetcode.com/problems/duplicate-zeros/description/
AR: E51

Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

Constraints:
- 1 <= arr.length <= 104
- 0 <= arr[i] <= 9

## Test
```
node test
```

## Performance
```
seq 5 | xargs -L1 time node duplicate-zeros-1 1000000
seq 5 | xargs -L1 time node duplicate-zeros-2 1000000
seq 5 | xargs -L1 time node duplicate-zeros-3 1000000
```
