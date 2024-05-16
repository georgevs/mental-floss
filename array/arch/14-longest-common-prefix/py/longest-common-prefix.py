from typing import List

class Solution:
  def longestCommonPrefix(self, strs: List[str]) -> str:
    if len(strs) == 0: return ""
    i = 0
    while True:
      for w in strs:
        if len(w) <= i or strs[0][i] != w[i]: return strs[0][0:i]
      i=i+1

if __name__ == '__main__':
  assert "fl" == Solution().longestCommonPrefix(["flower","flow","flight"])
  assert "" == Solution().longestCommonPrefix(["dog","racecar","car"])
  assert "" == Solution().longestCommonPrefix([])
  assert "" == Solution().longestCommonPrefix(["", "ab"])
