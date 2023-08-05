# 208. Implement Trie (Prefix Tree)

https://leetcode.com/problems/implement-trie-prefix-tree/description/  
AR: M63  
KEYS: hash table, string, design, trie  

A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

- Trie() Initializes the trie object.
- void insert(String word) Inserts the string word into the trie.
- boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
- boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

Constraints:

- 1 <= word.length, prefix.length <= 2000
- word and prefix consist only of lowercase English letters.
- At most 3 * 10^4 calls in total will be made to insert, search, and startsWith.

## Implementation
```
r: T { val, N: [T] }

r.insert s = if s iter s[1,] r.N[s0]
  iter s r = if !s r.val=T; iter s[1,] r.N[s0]?=T{}

r.search s -> t = (r.searchNode s).val
r.startsWith s -> t = r.searchNode s

r.searchNode s -> n = if !s r; r.N[s0].searchNode s[1,] 
```