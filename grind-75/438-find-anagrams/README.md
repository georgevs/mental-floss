# 438. Find All Anagrams in a String

https://leetcode.com/problems/find-all-anagrams-in-a-string/description/  
AR: 50M  
KEYS: hash table  

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Solution
```
fa X Y -> Z =
  if |X|< |Y| ret
  Yd=for y<-Y Ydy++
  k=|Y|, Xd=for x<-X[0:k] Xdx++
  for n=|X|-k,i<-[0..n]
    if Xd==Yd Z<-i
    if i<=n Xdxi--,Xdx[i+k]++
```
