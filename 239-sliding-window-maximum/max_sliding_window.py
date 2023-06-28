"""
  python3
"""

import unittest


class Solution1:
  def maxSlidingWindow(self, xs: list[int], k: int) -> list[int]:
    n = len(xs)
    if n < k:
      return []

    ys = []
    b = 0
    e = b+k
    while e <= n:
      ys.append(max(xs[b:e]))
      b += 1
      e += 1

    return ys


class Solution:
  def maxSlidingWindow(self, xs: list[int], k: int) -> list[int]:
    n = len(xs)
    if n < k:
      return []

    l = xs[0]
    x = max(xs[0:k])
    ys = [x]

    b = 1
    e = b+k
    while e <= n:
      r = xs[e-1]
      if r > l:
        x = max(x, r)
      ys.append(x)
      l = r
      b += 1
      e += 1

    return ys


class TestSolution(unittest.TestCase):
  def testBasic(self):
    # self.assertEqual([3, 3, 5, 5, 6, 7],
    #                  Solution().maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
    for maxSlidingWindow in [Solution1().maxSlidingWindow, Solution().maxSlidingWindow]:
      with self.subTest(maxSlidingWindow=maxSlidingWindow):
        print(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
        print(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7, 1, 1, 1], 3))
        print(maxSlidingWindow([1], 1))


if __name__ == '__main__':
  unittest.main()
