// bool possiblyEquals(string s1, string s2) {
//   s1 += ":"; s2 += ":";
//   unordered_set<int> seen;
//   function<bool(int, int, int, int)> DFS = [&](int i, int j, int d, int n) {
//       int a = s1[i] - '0', b = s2[j] - '0', dn = d + n;
//       return !n && !seen.insert(i * 10000 + j * 1000 + d).second ? false
//            : a < 10 ? n > 0 && DFS(i + 1, j, d, 10 * n + a) || DFS(i + 1, j, dn, a)
//            : b < 10 ? n < 0 && DFS(i, j + 1, d, 10 * n - b) || DFS(i, j + 1, dn, -b)
//            : dn < 0 ? a > 10 && DFS(i + 1, j, dn + 1, 0)
//            : dn > 0 ? b > 10 && DFS(i, j + 1, dn - 1, 0)
//            : a == b && (a == 10 || DFS(i + 1, j + 1, 0, 0));
//   };
//   return DFS(0, 0, 0, 0);
// }

const possiblyEquals = (s1, s2) => {
  s1 += ":"; s2 += ":";
  const m = new Set();
  const seen = x => {
    if (m.has(x)) return true;
    m.add(x);
    return false;
  };
  const DFS = (i, j, d, n) => {
      const a = s1[i].charCodeAt(0) - 48, b = s2[j].charCodeAt(0) - 48, dn = d + n;
      return !n && seen(i * 10000 + j * 1000 + d) ? false
           : a < 10 ? n > 0 && DFS(i + 1, j, d, 10 * n + a) || DFS(i + 1, j, dn, a)
           : b < 10 ? n < 0 && DFS(i, j + 1, d, 10 * n - b) || DFS(i, j + 1, dn, -b)
           : dn < 0 ? a > 10 && DFS(i + 1, j, dn + 1, 0)
           : dn > 0 ? b > 10 && DFS(i, j + 1, dn - 1, 0)
           : a == b && (a == 10 || DFS(i + 1, j + 1, 0, 0));
  };
  return DFS(0, 0, 0, 0);
};

module.exports = { possiblyEquals };
