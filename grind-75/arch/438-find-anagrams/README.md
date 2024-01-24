# 438. Find All Anagrams in a String

https://leetcode.com/problems/find-all-anagrams-in-a-string/description/  
AR: 50M  
KEYS: hash table  

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Solution
- start with a freq dictionary Fy for all chars in Y, 
  and freq dictionary Fx for the head |Y| chars in X
- sliding an index i in X from 0 to |X| - |Y|, 
  - add the index to the result Z if Fy==Fx, 
  - update Fx by droping xi and adding xj if j=i+k <= |X|

```
fa X Y -> Z
  n=|X|  k=|Y|
  if n<k ret
  Fy=for y<-Y Fy++
  Fx=for x<-X[0:k] Fx++
  for i=0:n-k+1
    if Fx==Fy  Z<-i
    if (j=i+k)<n  Fxi-- Fxj++ 
```
