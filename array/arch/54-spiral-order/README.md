# 54. Spiral Matrix

- https://leetcode.com/problems/spiral-matrix/
- https://leetcode.com/explore/learn/card/array-and-string/202/introduction-to-2d-array/1168/

AR: M50

Given an m x n matrix, return all elements of the matrix in spiral order.

Constraints:

- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 10
- -100 <= matrix[i][j] <= 100

## Test
```
node test
```

## Performance
```
seq 5 | xargs -L1 time node spiral-order-1 1000000
seq 5 | xargs -L1 time node spiral-order-2 1000000
```
