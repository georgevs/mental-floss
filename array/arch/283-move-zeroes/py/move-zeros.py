class Solution1:
  def moveZeroes(self, xs: list[int]) -> list[int]:
    i, j = 0, len(xs)-1
    while i < j:
      if xs[i] == 0:
        xs[i], xs[j] = xs[j], xs[i]
        j -= 1
      i += 1
    return xs


class Solution2:
  def moveZeroes(self, xs: list[int]) -> list[int]:
    n = len(xs)
    for i in range(n):
      if xs[i] == 0:
        j = i+1
        while j < n:
          if xs[j] != 0:
            xs[i], xs[j] = xs[j], xs[i]
            break
          j += 1
        if n <= j:
          break

    return xs
  

class Solution:
  def moveZeroes(self, xs: list[int]) -> list[int]:
    n = len(xs)
    for i in range(n):
      if xs[i] == 0:
        for j in range(i+1,n):
          if xs[j] != 0:
            xs[i], xs[j] = xs[j], xs[i]
            break
          if j+1==n:
            return xs

    return xs


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testBasic(self):
      self.assertEqual(
          [1, 3, 12, 0, 0], Solution().moveZeroes([0, 1, 0, 3, 12]))
      self.assertEqual([0], Solution().moveZeroes([0]))

  unittest.main()
