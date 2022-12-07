# 498. Diagonal Traverse

- https://leetcode.com/problems/diagonal-traverse/description/
- https://leetcode.com/explore/learn/card/array-and-string/202/introduction-to-2d-array/1167/
- https://leetcode.com/problems/diagonal-traverse/solutions/2887810/no-extra-space-complexity/

## Description

Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

Constraints:

- m == mat.length
- n == mat[i].length
- 1 <= m, n <= 10^4
- 1 <= m * n <= 10^4
- -10^5 <= mat[i][j] <= 10^5

## Test
```
node test
```

## Performance
```
seq 5 | xargs -L1 time node find-diagonal-order-1 1000000
seq 5 | xargs -L1 time node find-diagonal-order-2 1000000
```
