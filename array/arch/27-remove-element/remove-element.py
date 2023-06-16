from typing import List

class Solution:
  def removeElement(self, xs: List[int], val: int) -> int:
    k = 0
    for i, x in enumerate(xs):
      if x != val:
        if k < i: xs[k] = xs[i]
        k = k + 1
    return k

if __name__ == '__main__':
  removeElement_ = lambda xs, x: xs[0 : Solution().removeElement(xs, x)]
  assert [2, 2] == removeElement_([3, 2, 2, 3], 3)
  assert [0, 1, 2, 2, 3, 0, 4, 2] == removeElement_([0, 1, 2, 2, 3, 0, 4, 2], 2)
