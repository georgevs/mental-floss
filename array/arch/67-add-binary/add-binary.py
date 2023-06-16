class Solution:
  def addBinary(self, xs: str, ys: str) -> str:
    digit = lambda ch: ord(ch) - ord('0')
    alpha = lambda d: chr(d + ord('0'))
    def add(xs,ys,b):
      xs = list(xs)   # mutable
      n,l = len(xs),len(ys)
      c = 0
      for i in range(l):
        x = digit(xs[n-i-1]) + digit(ys[l-i-1]) + c
        xs[n-i-1] = alpha(x % b) 
        c = x // b
      for i in range(l,n):
        if c == 0: break
        x = digit(xs[n-i-1]) + c
        xs[n-i-1] = alpha(x % b)
        c = x // b
      if c > 0: xs.insert(0, alpha(c))
      return ''.join(xs)
    
    return add(xs,ys,2) if len(xs)>len(ys) else add(ys,xs,2)

if __name__ == "__main__":
  assert '100' == Solution().addBinary('11', '1')
  assert '100' == Solution().addBinary('1', '11')
  assert '10101' == Solution().addBinary('1010', '1011')
  assert '110110' == Solution().addBinary('100', '110010')
