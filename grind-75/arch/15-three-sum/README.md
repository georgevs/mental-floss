# 15. 3Sum

https://leetcode.com/problems/3sum/description/  
AR: M32  
KEYS: arrya, two pointers, sorting

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Constraints:

- 3 <= nums.length <= 3000
- -10^5 <= nums[i] <= 10^5

### Approach 1: Two Pointers  
```
threeSum: X k -> Y   Y:[(xi,xj,xk)]  X is sorted
  for i<n  
    for j=i+1,k=n-1,j<k  
      r=xi+xj+xk 
      if r>0 k-- ; 
      if r<0 j++ ;
      if r=0 Y<-(xi xj xk), j++ for xj==x[j-1] j++
    i++ for xi==x[i-1] i++
```

### Approach 2: Hashset  
```
twoSum: X k -> Y   Y:[(xi,xj)]  X is sorted
  for x,i<n  y=D[k-x]  Dx=x  i++
             if y  Y<-(y,x)  for i<n,xi=x i++

threeSum: X k -> Y   Y:[(xi,xj,xk)]  X is sorted
  for x,i<n-2
    Y<-[ [x,y,z] for [y,z] in twoSum(X[i+1:], -x) ]
```

### Approach 3: "No-Sort"  
