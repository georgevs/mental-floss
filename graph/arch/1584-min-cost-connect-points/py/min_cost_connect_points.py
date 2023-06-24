from typing import List, Tuple
from graph import Edge

Point = Tuple[int, int]


def edges(pts: List[Point]) -> List[Edge]:
  n = len(pts)
  xs = []
  for i in range(n):
    for j in range(i+1, n):
      xs.append([i, j, distance(pts[i], pts[j])])
  return xs


def distance(u, v: Point) -> int:
  return abs(u[0]-v[0]) + abs(u[1]-v[1])
