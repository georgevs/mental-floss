# 14. Longest Common Prefix

- https://leetcode.com/problems/longest-common-prefix/
- https://leetcode.com/explore/learn/card/array-and-string/203/introduction-to-string/1162/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

### Vertical scanning

- increment a counter k for each position in the first string
- for each other string in X check if the character at position k is the same
- if not break and return the k-length substring of the first string

```text
lcp X -> y =>
  for k < |x0|  for i<-[1:]  if x0k!=xik break
  ret x0[:k]
```

### Horizontal scanning

- starting with the first string as lcp
- until no next string relax lcp with next string

### Recursion

- LCP is the longest prefix between the first string and the LCP of the rest of the strings

### Divide and conquer

- LCP is the longest prefix between the LCP of first half of the strings and the LCP of the other half of the strings

### Binary search

- given the bounds l=0 and r=length n of the shortest of the strings
- loop as long as l < r
  - test if substring of length i=(l+r)/2 is a common prefix of all the strings
  - if not then continue searching on the left (r=i),
  - if yes then continue searching on the right (l=i+1)
