/*
docker container run --rm --name test-swift -it --volume "$PWD:/home" swift /bin/bash
swift find-max-consequitive-ones.swift
*/

class Solution {
  func findMaxConsecutiveOnes(_ xs: [Int]) -> Int {
    var r = 0, k = 0
    for x in xs {
      r = max(r, k + x)
      k = (k + x) * x
    }
    return r
  }
}

assert(3 == Solution().findMaxConsecutiveOnes([1,1,0,1,1,1]));
