# 5. Longest Palindromic Substring

https://leetcode.com/problems/longest-palindromic-substring/description/  
AR: 32M
KEYS: string, dynamic programming

Given a string s, return the longest palindromic substring in s.

Constraints:
- 1 <= s.length <= 1000
- s consist of only digits and English letters.

### Test
```
go test ./go
gradle -p java test
mvn -f java/pom.xml test
python3 py/longest_palindrome.py
```
### Solution: iterative
```
lps x->y: for k<-[n,1], i<-[0,n-k]: if y=x(i,k), pali y: ret
pali x->b: for b=t, j=n-1, i<j: if xi!=xj: ret f; ++i,--j 
```
