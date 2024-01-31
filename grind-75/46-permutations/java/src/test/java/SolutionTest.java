// Documentatiton:
//    https://docs.oracle.com/en/java/javase/17/docs/api/index.html
// Playground:
//    https://dev.java/playground/
// Test with:
//    gradle -p java test


import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;


class SolutionTest {
  @Test
  public void testSolution() {
    assertEquals(
      List.of(List.of(1, 2, 3), List.of(2, 1, 3), List.of(2, 3, 1), 
              List.of(1, 3, 2), List.of(3, 1, 2), List.of(3, 2, 1)),
      new Solution().permute(new int[]{1,2,3}));
  }
}

class Solution {
  public List<List<Integer>> permute(int[] xs) {
    return permute(IntStream.of(xs).boxed().collect(Collectors.toList()));
  }
  public List<List<Integer>> permute(List<Integer> xs) {
    if (xs.isEmpty()) { return List.of(List.of()); }
    return insert(xs.get(0), permute(xs.subList(1, xs.size())));
  }
  private List<List<Integer>> insert(Integer x, List<List<Integer>> yss) {
    var zss = new ArrayList<List<Integer>>();
    for (var ys : yss) {
      for (int i = 0; i < ys.size(); ++i) {
        var zs = new ArrayList<Integer>(ys.subList(0,i));
        zs.add(x);
        zs.addAll(ys.subList(i,ys.size()));
        zss.add(zs);
      }
      var zs = new ArrayList<Integer>(ys);
      zs.add(x);
      zss.add(zs);
    }
    return zss;
  }
}