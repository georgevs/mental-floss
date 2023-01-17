# Pascal's triangle II

- https://leetcode.com/problems/pascals-triangle-ii/
- https://leetcode.com/explore/learn/card/array-and-string/204/conclusion/1171/

Given an integer `rowIndex`, return the `rowIndex`-th (0-indexed) row of the Pascal's triangle.

Constraints:

- 0 <= rowIndex <= 33

## Explanation

In mathematics, Pascal's triangle is a triangular array of the binomial coefficients.

The entry in the n-th row and r-th column of Pascal's triangle is denoted (n r)

where (n r) =  n! / r!(n-r)!

Pascal rule (n r) = (n-1 r-1) + (n-1 r)

(n r)/(n r-1) = (n! / r!(n-r)!) / (n! / (r-1)!(n-r+1)!)
              = n-r+1 / r

## Test
```
node test
```

## Performance
```
seq 5 | xargs -L1 time node pascal-triangle-1a 1000000
seq 5 | xargs -L1 time node pascal-triangle-1b 1000000
seq 5 | xargs -L1 time node pascal-triangle-2 1000000
```
