"""
perm: X -> Y   X: {x}. Y: {[x]}
  Y <- ins x0 perm X \ x0
ins: x Y -> Y'
  for X<-Y, i|X|  Y' <- X0,i+x+Xi,n 
"""


def perm(xs):
  if len(xs) == 0:
    return []
  return ins(xs[0], perm(xs[1:]))


def ins(x, yss):
  if len(yss) == 0:
    return [[x]]
  zss = []
  for ys in yss:
    for i in range(0, len(ys)+1):
      zss.append(ys[0:i]+[x]+ys[i:])
  return zss


class Solution:
  def permutations(self, xs):
    return perm(xs)


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testBasic(self):
      self.assertEqual([[1]], Solution().permutations([1]))
      self.assertEqual([[0, 1], [1, 0]], Solution().permutations([0, 1]))
      self.assertEqual(
          [[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]],
          Solution().permutations([1, 2, 3]))

  unittest.main()
