import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import org.junit.jupiter.api.Test;

class Solution {
  public int[] sortColors(int[] xs) {
    int i = 0, j = 0, k = xs.length;
    while (i < k) {
      if (xs[i] == 0) { var t = xs[i]; xs[i] = xs[j]; xs[j] = t; ++i; ++j; }
      else if (xs[i] == 1) { ++i; }
      else { --k; var t = xs[i]; xs[i] = xs[k]; xs[k] = t; }
    }
    return xs;
  }

  @Test
  void testSortColors() {
    assertArrayEquals(new int[]{0,0,1,1,2,2}, new Solution().sortColors(new int[]{2,0,2,1,1,0}));
    assertArrayEquals(new int[]{0,1,2}, new Solution().sortColors(new int[]{2,0,1}));
    assertArrayEquals(new int[]{0,1,2}, new Solution().sortColors(new int[]{1,0,2}));
  }
}

