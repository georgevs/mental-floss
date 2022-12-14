# 167. Two Sum II - Input Array Is Sorted

- https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
- https://leetcode.com/explore/learn/card/array-and-string/205/array-two-pointer-technique/1153/

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

Constraints:

- 2 <= numbers.length <= 3 * 104
- -1000 <= numbers[i] <= 1000
- numbers is sorted in non-decreasing order.
- -1000 <= target <= 1000
- The tests are generated such that there is exactly one solution.

## Test
```
node test
```

## Performance
```
seq 5 | xargs -L1 time node two-sum-1 1000000
seq 5 | xargs -L1 time node two-sum-2 1000000
seq 5 | xargs -L1 time node two-sum-3 1000000
seq 5 | xargs -L1 time node two-sum-4a 1000000
seq 5 | xargs -L1 time node two-sum-4b 1000000
```
