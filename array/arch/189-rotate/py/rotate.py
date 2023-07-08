class Solution:
  def rotate(self, xs: list[int], k: int) -> list[int]:
    n = len(xs)
    return ror(xs, k % n) if k > 0 else rol(xs, -k % n)


def ror(xs, k):
  return rol(xs, len(xs)-k)


# def rol(xs, k):
#   xs[:k], xs[k:] = xs[k:], xs[:k]


def rol(xs, k):
  n = len(xs)
  reverse(xs, 0, k-1)
  reverse(xs, k, n-1)
  reverse(xs, 0, n-1)
  return xs


def reverse(xs, i, j):
  while i < j:
    xs[i], xs[j] = xs[j], xs[i]
    i += 1
    j -= 1


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testBasic(self):
      self.assertEqual([5, 6, 7, 1, 2, 3, 4],
                       Solution().rotate([1, 2, 3, 4, 5, 6, 7], 3))
      self.assertEqual([3, 99, -1, -100],
                       Solution().rotate([-1, -100, 3, 99], 2))
      self.assertEqual([2, 3, 4, 5, 6, 1],
                       Solution().rotate([1, 2, 3, 4, 5, 6], 11))

  unittest.main()
