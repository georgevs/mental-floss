class TimeMap:
  def __init__(self):
    self.d = dict()

  def set(self, k, v, t):
    self.d.setdefault(k, []).append((t, v))

  def get(self, k, t):
    if xs := self.d.get(k):
      i = ubound(xs, t)
      if 0 < i <= len(xs):
        return xs[i-1][1]
    return ""


def ubound(xs, t):
  l, r = 0, len(xs)
  while l < r:
    i = (l+r)//2
    if xs[i][0] <= t:
      l = i+1
    else:
      r = i
  return l


if __name__ == '__main__':
  import unittest

  class TestTimeMap(unittest.TestCase):
    def testBasic(self):
      tm = TimeMap()
      tm.set("kx", "x2", 2)
      tm.set("kx", "x4", 4)
      tm.set("ky", "y2", 2)
      tm.set("ky", "y4", 4)
      self.assertEqual("", tm.get("kz", 1))
      self.assertEqual("", tm.get("kx", 1))
      self.assertEqual("x2", tm.get("kx", 2))
      self.assertEqual("x2", tm.get("kx", 3))
      self.assertEqual("x4", tm.get("kx", 4))
      self.assertEqual("x4", tm.get("kx", 5))
      self.assertEqual("y2", tm.get("ky", 2))
      self.assertEqual("y2", tm.get("ky", 3))
      self.assertEqual("y4", tm.get("ky", 4))
      self.assertEqual("y4", tm.get("ky", 5))

  unittest.main()
