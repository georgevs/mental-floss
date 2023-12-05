# 76. Minimum Window Substring
https://leetcode.com/problems/minimum-window-substring  
Rank: H41; Topics: hash table, string, sliding window  

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

### Constraints
- m == s.length
- n == t.length
- 1 <= m, n <= 10^5
- s and t consist of uppercase and lowercase English letters.

### Solution
- run sliding window over input till right end reaches end;
- expand right UNTIL the window chars multiset is greater or equal than target;
- shrink left WHILE the window chars multiset is greater or equal than target;
- if a target char is added/removed in the multiset update the result shortest substring.

* checking greater or equal for multisets is SLOW. Instead, compare count of chars in target with count of chars in windows multiset which frequency is greater or equal than corresponding char frequency in target.


```
mws s t -> r =
  for j<m
    x,j=sj,j+1
    if tx z+=x  if t<=z  r min=sij
    for t<=z
      x,i=si,i+1
      if tx z-=x
      if t<=z  r min=sij
```
