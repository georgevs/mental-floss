"""
python3 merge.py
"""

from typing import List


class Solution:
  def merge(self, xs: List[int], m: int, ys: List[int], n: int) -> None:
    i = m - 1
    j = n - 1
    k = len(xs)
    while k > 0:
      if j < 0:
        break
      k -= 1
      if i < 0 or xs[i] < ys[j]:
        xs[k] = ys[j]
        j -= 1
      else:
        xs[k] = xs[i]
        i -= 1
    return xs

if __name__ == '__main__':
  assert [1, 2, 2, 3, 5, 6] == Solution().merge(
      [1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
