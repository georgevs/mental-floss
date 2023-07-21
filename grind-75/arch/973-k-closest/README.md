# 973. K Closest Points to Origin

Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

Constraints:

- 1 <= k <= points.length <= 10^4
- -10^4 < xi, yi < 10^4

Approach 1: Sort
```
k_closest: U k -> Z =
  Z = sort(U, orderByDist)[:k]
```

Approach 1a: Heapsort
```
k_closest: U k -> Z =
  for u(yx)  d=xx+yy  Z->du
  Z = heapsort(Z)[:k]

heapsort Z -> Z' =
  heapify:  for i[n/2-1,0] sink(i,n)
  sort:     for i[n-1,1]   x0~xi sink(0,i)
  sink i:   t=min(lir)  if t!=i  xt~xi sink(t)
```

Approach 2: Divide and Conquer