class IntervalSolution:
  def leastInterval(self, xs, k):
    # print(xs, k)  # dbg
    ys = [0]*26
    for x in xs:
      ys[ord(x)-65] += 1

    r = 0
    while True:
      # print(ys[:k+1])  # dbg
      l, m, n = 0, 0, min(26, k+1)
      for i in range(n):
        if ys[i] == 0:
          break
        if ys[i] > 1:
          m += 1
        else:
          l += 1
        ys[i] -= 1
      if m == 0 and l <= k:
        return r+l
      r += k+1
      ys.sort(reverse=True)


class ListSolution:
  def leastInterval(self, xs, k):
    print(k, xs)  # dbg
    ys = {}
    for x in xs:
      ys[x] = ys.get(x, 0)+1
    ys = [[k, x] for x, k in ys.items()]

    r, rs, n = 0, [], min(len(ys), k+1)
    while True:
      ys.sort(key=lambda y: y[0], reverse=True)
      # print(ys[:k+1])  # dbg
      l, m = 0, 0
      for i in range(n):
        y = ys[i]
        if y[0] == 0:
          break
        if y[0] > 1:
          m += 1
        else:
          l += 1
        y[0] -= 1
        rs.append(y[1])
      if m == 0 and l <= k:
        print(len(rs), rs)
        return r+l
      r += k+1
      rs.extend([None]*(k+1-m-l))


class ListSolution2:
  def leastInterval(self, xs, k):
    print(k, xs)  #dbg

    ys = {}
    for x in xs:
      ys[x] = ys.get(x, 0)+1
    ys = [[f, x]for x, f in ys.items()]

    r = 0

    while ys:
      ys.sort(key=lambda y: y[0], reverse=True)
      i, n = 0, min(len(ys), k+1)
      print(ys[:n])  # dbg
      while i < n and ys[i][0] > 1:
        ys[i][0] -= 1
        i += 1
      del ys[i:n]
      r += k+1 if ys else n

    return r


if __name__ == '__main__':
  import unittest

  class TestSolution(unittest.TestCase):
    def testIntervalSolution(self):
      self.__testSolution(IntervalSolution)

    def testListSolution(self):
      self.__testSolution(ListSolution)

    def testListSolution2(self):
      self.__testSolution(ListSolution2)

    def __testSolution(self, Solution):
      self.assertEqual(8, Solution().leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2))
      self.assertEqual(6, Solution().leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0))
      self.assertEqual(16, Solution().leastInterval(
          ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2))
      self.assertEqual(31, Solution().leastInterval(['A', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                       'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'], 29))
      self.assertEqual(12, Solution().leastInterval(
          ['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'E'], 2))

  unittest.main()
