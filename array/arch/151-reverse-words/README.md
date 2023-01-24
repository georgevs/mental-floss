# 151. Reverse Words in a String

## Description

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

Constraints:

- 1 <= s.length <= 104
- s contains English letters (upper-case and lower-case), digits, and spaces ' '.
- There is at least one word in s.

## Solutions

- Split to words, reverse, join
- Reverse string (compacting spaces), then reverse words
- scan words in a deque, build string from deque in reverse order

## Test
```
node test
```

## Performance
```
seq 5 | xargs -L1 time node reverse-words-1.js 100000
seq 5 | xargs -L1 time node reverse-words-2.js 100000
```
