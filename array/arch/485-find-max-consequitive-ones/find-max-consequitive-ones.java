/*
docker start -ia ws-ubuntu
javac --class-path=__out -d __out find-max-consequitive-ones.java
java  --class-path=__out -ea Test
*/

class Solution {
  public int findMaxConsecutiveOnes(int[] xs) {
    int r = 0, k = 0;
    for (int x : xs) {
      r = Math.max(r, k + x);
      k = (k + x) * x;
    }
    return r;
  }
}

class Test {
  public static void main(String[] args) {
    assert 3 == new Solution().findMaxConsecutiveOnes(new int[]{ 1,1,0,1,1,1 });
  }
}