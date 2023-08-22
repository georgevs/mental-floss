def bsearch(xs, x, l, r):
  while l < r:
    i = (l+r)//2
    if xs[i] < x:
      l = i+1
    elif x < xs[i]:
      r = i
    else:
      return i
  return -1


def findPivot(xs):
  l, r = 0, len(xs)
  while l < r:
    i = (l+r)//2
    if l+1 == r:
      return l
    if l+2 == r:
      return l if xs[l] < xs[i] else i
    if xs[i-1] > xs[i]:
      return i
    if xs[i] > xs[i+1]:
      return i+1
    if xs[i] > xs[r-1]:
      l = i+1
    else:
      r = i


class SolutionRecursive:
  def search(self, xs, x):

    def iter(l, r):
      if xs[l] <= x <= xs[r-1]:
        return bsearch(xs, x, l, r)
      i = (l+r)//2
      if l < i:
        if ((k := iter(l, i)) != None or
                (i < r and (k := iter(i, r)) != None)):
          return k

    return k if (k := iter(0, len(xs))) != None else -1


class SolutionFindPivot:
  def search(self, xs, x):
    k = findPivot(xs)
    if 0 < k and xs[0] <= x:
      return bsearch(xs, x, 0, k)
    return bsearch(xs, x, k, len(xs))


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testFindPivot(self):
      def findPivot_(xs): return xs[findPivot(xs):]
      self.assertEqual([0, 1, 2], findPivot_([4, 5, 6, 7, 0, 1, 2]))
      self.assertEqual([1], findPivot_([1]))
      self.assertEqual([1, 3], findPivot_([1, 3]))
      self.assertEqual([1], findPivot_([3, 1]))
      self.assertEqual([1, 3], findPivot_([1, 3]))
      self.assertEqual([1], findPivot_([3, 1]))
      self.assertEqual([1], findPivot_([3, 5, 1]))

    def testSearchRecursive(self):
      self.__testSearch(SolutionRecursive)

    def testSearchFindPivot(self):
      self.__testSearch(SolutionFindPivot)

    def __testSearch(self, Solution):
      self.assertEqual(4, Solution().search([4, 5, 6, 7, 0, 1, 2], 0))
      self.assertEqual(-1, Solution().search([4, 5, 6, 7, 0, 1, 2],  3))
      self.assertEqual(-1, Solution().search([1], 0))
      self.assertEqual(0, Solution().search([1, 3], 1))
      self.assertEqual(1, Solution().search([3, 1], 1))
      self.assertEqual(1, Solution().search([1, 3], 3))
      self.assertEqual(0, Solution().search([3, 1], 3))

  unittest.main()
