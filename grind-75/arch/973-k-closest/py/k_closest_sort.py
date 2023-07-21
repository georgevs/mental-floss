class SolutionSort:
  def kClosest(self, us: list[list[int]], k: int) -> list[list[int]]:
    def dist(u): return u[0]*u[0] + u[1]*u[1]
    zs = [(dist(u), u) for u in us]
    zs.sort(key=lambda it: it[0])
    zs = zs[:k]
    return [it[1] for it in zs]


class SolutionHeapsort:
  def kClosest(self, us: list[list[int]], k: int) -> list[list[int]]:
    def dist(u): return u[0]*u[0] + u[1]*u[1]
    zs = [(dist(u), u) for u in us]
    heapsort(zs, key=lambda it: it[0])
    zs = zs[:k]
    return [it[1] for it in zs]


def heapsort(xs, key):
  n = len(xs)

  def less(i, j): return key(xs[i]) > key(xs[j])

  def sink(i, n):
    while True:
      t = i
      l = 2*i+1
      if l < n and less(l, t):
        t = l
      r = 2*i+2
      if r < n and less(r, t):
        t = r
      if t == i:
        break
      xs[i], xs[t] = xs[t], xs[i]
      i = t

  def heapify():
    i = n//2-1
    while i >= 0:
      sink(i, n)
      i -= 1

  def sort():
    i = n-1
    while i >= 1:
      xs[0], xs[i] = xs[i], xs[0]
      sink(0, i)
      i -= 1

  heapify()
  sort()
  return xs


Solution = SolutionHeapsort


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testBasic(self):
      self.assertEqual([[-2, 2]], Solution().kClosest([[1, 3], [-2, 2]], 1))
      self.assertEqual([[3, 3], [-2, 4]],
                       Solution().kClosest([[3, 3], [5, -1], [-2, 4]], 2))

  unittest.main()
