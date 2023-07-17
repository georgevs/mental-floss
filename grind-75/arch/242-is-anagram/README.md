# 242. Valid Anagram

https://leetcode.com/problems/valid-anagram/   
AR: E63  
KEYS: hash, string, sort  

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Constraints:
- 1 <= s.length, t.length <= 5 * 104
- s and t consist of lowercase English letters.

### Approach 1: Sorting
```
is_anagram: X Y -> t = sorted X == sorted Y
```

### Approach 2: Frequency Counter
```
is_anagram: X Y -> t =
  for x ++d[x]
  for y if !d[y] ret f; if !--d[y] ~d[y]
  return !d
```
