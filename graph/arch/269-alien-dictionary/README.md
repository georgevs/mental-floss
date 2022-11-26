# 269. Alien Dictionary

## References
- https://leetcode.com/problems/alien-dictionary/
- https://leetcode.com/explore/learn/card/graph/623/kahns-algorithm-for-topological-sorting/3909/

## Description
There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.

You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language.

Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "". If there are multiple solutions, return any of them.

Constraints:

- 1 <= words.length <= 100
- 1 <= words[i].length <= 100
- words[i] consists of only lowercase English letters.

## Test
```
node test
```

## Performance
```
seq 5 | xargs -L1 time node alien-order-1 100000
seq 5 | xargs -L1 time node alien-order-2 100000
seq 5 | xargs -L1 time node alien-order-kahn-1 100000
seq 5 | xargs -L1 time node alien-order-kahn-2 100000
```
