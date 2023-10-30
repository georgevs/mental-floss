"""
max-area xs -> r: for i=[0,n): r max= max-area i
max-area i -> r: for j=[n,i],xj<xi: r max= min(xi,xj)*(j-i)
"""


class SolutionBruteForce:
  def maxArea(self, xs):
    r, n = 0, len(xs)
    for i in range(n):
      for j in range(n-1, i, -1):
        if xs[j] < xs[i]:
          r = max(r, xs[j]*(j-i))
        else:
          r = max(r, xs[i]*(j-i))
          break
    return r


class SolutionTwoPointers:
  def maxArea(self, xs):
    r, i, j = 0, 0, len(xs)-1
    while i < j:
      r = max(r, min(xs[i], xs[j])*(j-i))
      if xs[i] < xs[j]:
        i += 1
      else:
        j -= 1
    return r


if __name__ == '__main__':
  import unittest
  import json
  import os

  def load_test_data(id):
    file_path = os.path.join(os.path.dirname(__file__), f'../{id}.json')
    with open(file_path, 'r') as f:
      return json.load(f)

  class TestSolution(unittest.TestCase):
    def testTwoPointers(self):
      self.__testBasic(SolutionTwoPointers)
      self.assertEqual(97658256, SolutionTwoPointers().maxArea(load_test_data('test-10000')))
      self.assertEqual(50000000, SolutionTwoPointers().maxArea(load_test_data('test-20000')))

    def testBruteForce(self):
      self.__testBasic(SolutionBruteForce)

    def __testBasic(self, Solution):
      self.assertEqual(49, Solution().maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
      self.assertEqual(1, Solution().maxArea([1, 1]))

  unittest.main()
