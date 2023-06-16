# TODO: reverse str -> str = str[::-1]

class Solution:
  def reverseWords(self, s: str) -> str:
    xs = list(s)  # preserve variable length codepoint
    n = len(s)
    i = 0
    while True:
      while i < n and xs[i] == ' ':
        i = i+1
      if i == n:
        break
      b = i
      while i < n and xs[i] != ' ':
        i = i+1
      e = i
      while b < e-1:
        e = e-1
        t = xs[b]
        xs[b] = xs[e]
        xs[e] = t
        b = b+1

    return ''.join(xs)


if __name__ == '__main__':
  assert '' == Solution().reverseWords('')
  assert 'a' == Solution().reverseWords('a')
  assert ' a b ' == Solution().reverseWords(' a b ')
  assert ' cba fed ' == Solution().reverseWords(' abc def ')
  assert ' cba   fed ' == Solution().reverseWords(' abc   def ')
  assert "s'teL ekat edoCteeL tsetnoc" == Solution().reverseWords("Let's take LeetCode contest")
  assert "doG gniD" == Solution().reverseWords("God Ding")
