class Solution:
  def strStr(self, xs: str, ys: str) -> int:
    n = len(xs)
    l = len(ys)
    for i in range(n-l+1):
      j = 0
      while j < l and xs[i+j] == ys[j]: j = j + 1
      if j == l: return i

    return -1
      
      
if __name__ == '__main__':
  assert 0 == Solution().strStr("abcdefghi", "abc")
  assert 3 == Solution().strStr("abcdefghi", "def")
  assert 6 == Solution().strStr("abcdefghi", "ghi")
  assert -1 == Solution().strStr("abcdefghi", "jkl")
  assert -1 == Solution().strStr("ab", "abc")
  assert -1 == Solution().strStr("", "abc")
  assert 0 == Solution().strStr("abc", "")
  assert 4 == Solution().strStr("mississippi", "issip")
  assert -1 == Solution().strStr("leetcode", "leeto")
