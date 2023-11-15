// javac -d bin SolutionTest.java && java -cp bin -ea SolutionTest

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

class SolutionTest {
  public static void main(String[] args) {
    // System.out.println("Hello world!");
    assert (16 == new Solution().leastInterval(
        new char[] { 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G' }, 2));
  }
}

class Solution {
  public int leastInterval(char[] xs, int k) {
    var ys = new int[26];
    for (var x : xs) {
      ++ys[x - 'A'];
    }
    int r = 0;
    int n = Math.min(k + 1, 26);
    for (;;) {
      Arrays.sort(ys);
      int m = 0, l = 0;
      for (int i = 0; i < n && ys[25 - i] > 0; ++i) {
        if (ys[25 - i] > 1) {
          ++m;
        } else {
          ++l;
        }
        --ys[25 - i];
      }
      if (m == 0 && l <= k) {
        return r + l;
      }
      r += k + 1;
    }
  }
}
