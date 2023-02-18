"""
python3 find-max-consequitive-ones.py 
"""

from typing import List


class Solution:
  def findMaxConsecutiveOnes(self, xs: List[int]) -> int:
    r = 0
    k = 0
    for x in xs:
      r = max(r, k + x)
      k = (k + x) * x

    return r


if __name__ == '__main__':
  assert 3 == Solution().findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])
