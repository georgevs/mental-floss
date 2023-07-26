class SolutionBruteForse:
  def threeSum(self, xs: list[int]) -> list[list[int]]:
    xs = sorted(xs)
    n = len(xs)
    ys = []

    i = 0
    while i < n-2 and xs[i] <= 0:
      j = i+1
      while j < n-1 and xs[i]+xs[j] <= 0:
        k = j+1
        while k < n and xs[i]+xs[j]+xs[k] <= 0:
          if xs[i]+xs[j]+xs[k] == 0:
            ys.append([xs[i], xs[j], xs[k]])
            k = +1
            break   # others are same or bigger

          k += 1
          while k < n and xs[k-1] == xs[k]:
            k += 1

        j += 1
        while j < n-1 and xs[j-1] == xs[j]:
          j += 1

      i += 1
      while i < n-2 and xs[i-1] == xs[i]:
        i += 1

    return ys


def twoSum(xs, k):
  ys = []
  vs = set()
  n = len(xs)
  i = 0
  while i < n:
    x = xs[i]
    i += 1
    y = k-x
    if y in vs:
      ys.append([y, x])
      while i < n and xs[i] == x:
        i += 1
    vs.add(x)

  return ys


class SolutionHashsum:
  def threeSum(self, xs: list[int]) -> list[list[int]]:
    xs.sort()
    n = len(xs)
    ys = []
    i = 0
    while i < n-2:
      xi = xs[i]
      ys.extend([[xi, xj, xk] for [xj, xk] in twoSum(xs[i+1:], -xi)])
      i += 1
      while i < n and xs[i] == xi:
        i += 1

    return ys


class SolutionTwoPointers:
  def threeSum(self, xs: list[int]) -> list[list[int]]:
    xs.sort()
    n = len(xs)
    ys = []
    i = 0
    while i < n-2:
      j, k = i+1, n-1
      while j < k:
        r = xs[i]+xs[j]+xs[k]
        if r > 0:
          k -= 1
        elif r < 0:
          j += 1
        else:
          ys.append([xs[i], xs[j], xs[k]])
          j += 1
          while j < k and xs[j-1] == xs[j]:
            j += 1

      i += 1
      while i < n and xs[i-1] == xs[i]:
        i += 1

    return ys


def bsearch(xs, l, r, x):
  while l < r:
    i = (l+r)//2
    if xs[i] == x:
      return i
    elif xs[i] < x:
      l = i+1
    else:
      r = i
  return -1


if __name__ == '__main__':
  import unittest
  import json

  def load(filePath):
    with open(filePath, 'r') as fp:
      return json.load(fp)

  class TestSolution(unittest.TestCase):
    def testBsearch(self):
      self.assertEqual(-1, bsearch([], 0, 0, 0))
      self.assertEqual(-1, bsearch([1, 2, 3], 0, 0, 1))
      self.assertEqual(0, bsearch([1, 2, 3], 0, 3, 1))
      self.assertEqual(1, bsearch([1, 2, 3], 0, 3, 2))
      self.assertEqual(1, bsearch([1, 2, 3], 1, 2, 2))
      self.assertEqual(1, bsearch([1, 2, 3], 1, 3, 2))
      self.assertEqual(2, bsearch([1, 2, 3], 2, 3, 3))
      self.assertEqual(-1, bsearch([1, 2, 3], 0, 2, 3))

    def testThreeSumBruteForse(self):
      self.__testThreeSum(SolutionBruteForse)

    def testThreeSumHashsum(self):
      self.__testThreeSum(SolutionHashsum)

    def testThreeSumTwoPointers(self):
      self.__testThreeSum(SolutionTwoPointers)

    def __testThreeSum(self, Solution):
      def threeSum(xs): return sorted(Solution().threeSum(xs))
      self.assertEqual([[-1, -1, 2], [-1, 0, 1]],
                       threeSum([-1, 0, 1, 2, -1, -4]))
      self.assertEqual([], threeSum([0, 1, 1]))
      self.assertEqual([[0, 0, 0]], threeSum([0, 0, 0]))
      # self.assertEqual([], threeSum(load('../test-3000.json')))

    def testTwoSum(self):
      def twoSum_(xs, k): return sorted(twoSum(xs, k))
      self.assertEqual([[-1, 2], [0, 1]], twoSum_([-1, 0, 1, 2], 1))
      self.assertEqual([[-1, 2], [0, 1]], twoSum_([-1, 0, 1, 1, 1, 2], 1))
      self.assertEqual([[0, 0]], twoSum_([0, 0], 0))

  unittest.main()
