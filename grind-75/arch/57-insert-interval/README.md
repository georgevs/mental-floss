# 57. Insert Interval

https://leetcode.com/problems/insert-interval/description/  
AR: M39  
KEYS: array  

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Constraints:

- 0 <= intervals.length <= 10^4
- intervals[i].length == 2
- 0 <= starti <= endi <= 10^5
- intervals is sorted by starti in ascending order.
- newInterval.length == 2
- 0 <= start <= end <= 10^5

Approach 1: Linear Search
```
insert X (a b) -> X'
  for i[0,n), xi1<a {}    => a<=xi0
  for j[i,n), b<=xj0 {}   => b<xj0
  y=(min a xi0,  max b x[j-1,1])
  x[i:j]=[y]
```

Approach 2: Binary Search
