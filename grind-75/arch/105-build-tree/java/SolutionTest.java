/*
  rm -rf __bin ; mkdir __bin
  (cd __bin ; curl -s \
    -O https://repo1.maven.org/maven2/org/junit/jupiter/junit-jupiter-api/5.8.2/junit-jupiter-api-5.8.2.jar \
    -O https://repo1.maven.org/maven2/org/opentest4j/opentest4j/1.2.0/opentest4j-1.2.0.jar \
    -O https://repo1.maven.org/maven2/org/apiguardian/apiguardian-api/1.1.2/apiguardian-api-1.1.2.jar \
    -O https://repo1.maven.org/maven2/org/junit/platform/junit-platform-commons/1.8.2/junit-platform-commons-1.8.2.jar)
  javac -d __bin -cp '__bin/*' SolutionTest.java
  java -cp '__bin:__bin/*' SolutionTest
*/

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

class SolutionTest {
  public static void main(String[] args) {
    // WARNING:
    //    var xs = List.of(1, null, 3); // CRASH!
    //    var xs = new Object[] {1, null, 3}; // OK

    TreeNode root = new TreeNode(3,
        new TreeNode(9),
        new TreeNode(20,
            new TreeNode(15),
            new TreeNode(7)));

    var xs = new ArrayList<Integer>();
    root.iterator()
        .forEachRemaining(x -> xs.add(x != null ? x.val : null));

    Function<TreeNode, List<Integer>> toIntList = p -> p.toList().stream()
        .map(TreeNode::valueOf)
        .collect(Collectors.toList());

    assertArrayEquals(new Integer[] { 3, 9, 20, null, null, 15, 7 }, xs.toArray());
    assertArrayEquals(new Integer[] { 3, 9, 20, null, null, 15, 7 }, toIntList.apply(root).toArray());

    assertArrayEquals(
        new Integer[] { 3, 9, 20, null, null, 15, 7 },
        toIntList.apply(new Solution().buildTree(
            new int[] { 3, 9, 20, 15, 7 },
            new int[] { 9, 3, 15, 20, 7 })).toArray());

    assertArrayEquals(
        new Integer[] { -1 },
        toIntList.apply(new Solution().buildTree(
            new int[] { -1 },
            new int[] { -1 })).toArray());
  }
}

class Solution {
  public TreeNode buildTree(int[] xs, int[] ys) {
    return buildTree(xs, new int[] { 0 }, ys, 0, ys.length);
  }

  private TreeNode buildTree(int[] xs, int[] s, int[] ys, int i, int j) {
    var val = xs[s[0]];
    ++s[0];
    var p = new TreeNode(val);
    int l;
    for (l = i; l < j; ++l) {
      if (ys[l] == val) {
        break;
      }
    }
    if (i < l) {
      p.left = buildTree(xs, s, ys, i, l);
    }
    if (l + 1 < j) {
      p.right = buildTree(xs, s, ys, l + 1, j);
    }
    return p;
  }
}

class TreeNode implements Iterable<TreeNode> {
  int val;
  TreeNode left;
  TreeNode right;

  TreeNode() {
  }

  TreeNode(int val) {
    this.val = val;
  }

  TreeNode(int val, TreeNode left, TreeNode right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  public Iterator<TreeNode> iterator() {
    return toList().iterator();
  }

  public List<TreeNode> toList() {
    var qs = new LinkedList<TreeNode>();
    var rs = new ArrayList<TreeNode>();
    var count = 0;
    qs.add(this);
    while (!qs.isEmpty()) {
      var x = qs.pollFirst();
      rs.add(x);
      if (x != null) {
        count = rs.size();
        qs.add(x.left);
        qs.add(x.right);
      }
    }
    return rs.subList(0, count);
  }

  public static Integer valueOf(TreeNode x) {
    return x != null ? x.val : null;
  }

  // public Iterator<TreeNode> iterator() {
  //   return new Iterator<TreeNode>() {
  //     LinkedList<TreeNode> rs = new LinkedList<TreeNode>();
  //     LinkedList<TreeNode> qs = new LinkedList<TreeNode>();
  //     {
  //       init();
  //     }
  //     private void init() {
  //       qs.add(TreeNode.this);
  //       while (!qs.isEmpty()) {
  //         var x = qs.pollFirst();
  //         rs.add(x);
  //         if (x != null) {
  //           qs.add(x.left);
  //           qs.add(x.right);
  //           return;
  //         }
  //       }
  //       rs.clear();
  //     }
  //     public boolean hasNext() {
  //       return !rs.isEmpty();
  //     }
  //     public TreeNode next() {
  //       var y = rs.pollFirst();
  //       if (rs.isEmpty()) {
  //         while (!qs.isEmpty()) {
  //           var x = qs.pollFirst();
  //           rs.add(x);
  //           if (x != null) {
  //             qs.add(x.left);
  //             qs.add(x.right);
  //             return y;
  //           }
  //         }
  //         rs.clear();
  //       }
  //       return y;
  //     }
  //   };
  // }

  public String toString() {
    return Integer.toString(val);
  }
}