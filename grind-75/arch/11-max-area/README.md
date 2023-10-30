# 11. Container With Most Water

https://leetcode.com/problems/container-with-most-water  
AR: 54M
KEYS: array, two pointers, greedy  

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

### Solution: Brute force
```
max-area xs -> r
  for i<-[0..n) for j<-(n..i),xj<xi  r max= min(xi,xj)*(j-i)
```
### Solution: Two pointers
```
max-area xs -> r
  for i=0,j=n-1,i<j   
    r max= min(xi,xj)*(j-i)
    if xi<xj ++i; --j
``` 
