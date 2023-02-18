class Solution {

  public int findMaxConsecutiveOnes(int[] xs) {
    int r = 0, k = 0;
    for (int x : xs) {
      r = Math.max(r, k + x);
      k = (k + x) * x;
    }
    return r;
  }

  public static void main(String[] args) {
    
  }
}
