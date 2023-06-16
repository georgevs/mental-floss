from typing import List

class Solution:
  def plusOne(self, xs: List[int]) -> List[int]:
    n = len(xs)
    c = 1
    for i,x in enumerate(reversed(xs)):
      if c == 0: break
      xs[n-i-1] = (x+c) % 10
      c = (x+c) // 10
    if c != 0: xs = [c] + xs

    return xs

if __name__ == '__main__':
  assert [4, 3, 2, 2] == Solution().plusOne([4, 3, 2, 1])
  assert [1, 0] == Solution().plusOne([9])