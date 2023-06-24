class UnionFind:
  def __init__(self, n: int):
    self.rs = [i for i in range(n)]
    self.hs = [1]*n

  def find(self, i: int) -> int:
    while i != self.rs[i]:
      i = self.rs[i]
    return i

  def connect(self, i: int, j: int) -> bool:
    ri, rj = self.find(i), self.find(j)
    if ri == rj:
      return False
    if self.hs[ri] < self.hs[rj]:
      self.rs[ri] = rj
    elif self.hs[rj] < self.hs[ri]:
      self.rs[rj] = ri
    else:
      self.rs[ri] = rj
      self.hs[rj] = self.hs[rj]+1
    return True
