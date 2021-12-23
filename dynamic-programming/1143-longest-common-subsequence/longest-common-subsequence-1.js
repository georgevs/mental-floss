// 1 <= s1.length, s2.length <= 1000
// s1 and s2 consist of only lowercase English characters.

var longestCommonSubsequence = (s1, s2) => {
  const ss1 = sortedPartitions(subseqs(s1));
  const ss2 = partition(subseqs(s2));
  for (let [l, xs] of ss1) {
    const ys = ss2.get(l);
    if (ys) {
      for (const x of xs) {
        for (const y of ys) {
          if (x == y) return x.length; 
        }
      }
    }
  }
  return 0;
};

const sortedPartitions = (xs) => Array.from(partition(xs)).sort(([l], [r]) => r - l);
const partition = (xs) => xs.reduce((m, x) => ((m.get(x.length) ?? m.set(x.length, []).get(x.length)).push(x), m), new Map());

const subseqs = (s) => {
  const iter = (s) => {
    if (s.length === 0) return [];
    const r = new Set();
    for (let i = 0; i < s.length; ++i) {
      const ls = dp(s.substring(0, i));
      const rs = dp(s.substring(i + 1));
      comb(ls, '', rs).forEach(r.add.bind(r));
      comb(ls, s[i], rs).forEach(r.add.bind(r));
    }
    return Array.from(r);
  };

  const dp = memoize(map(), iter);

  return dp(s);
};

const memoize = (m, f) => (x) => m.get(x) ?? m.set(x, f(x));
const map = (i) => {
  const m = new Map(i);
  return { get: x => m.get(x), set: (x,y) => (m.set(x, y), y) };
};

const comb = (ls, ch, rs) => {
  const r = new Set();
  const strings = (xs) => xs.length ? xs : [''];
  for (let s1 of strings(ls)) {
    for (let s2 of strings(rs)) {
      const s = s1 + ch + s2;
      if (s.length > 0) r.add(s1 + ch + s2);
    }
  }
  return Array.from(r);
};


const { assert } = require('../../utils/assert');

assert([
  [3, ['abc']],
  [2, ['ab', 'ac', 'bc']],
  [1, ['a', 'b', 'c']]
], sortedPartitions(['a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']));


assert([], subseqs(''));
assert(['a'], subseqs('a'));
assert(['a', 'ab', 'b'], subseqs('ab').sort());
assert(['a', 'ab', 'abc', 'ac', 'b', 'bc', 'c'], subseqs('abc').sort());

assert([], comb([], '', []));
assert(['b'], comb([], 'b', []));
assert(['ab'], comb(['a'], 'b', []));
assert(['abc'], comb(['a'], 'b', ['c']));
assert(['acd', 'ace', 'bcd', 'bce'], comb(['a', 'b'], 'c', ['d', 'e']));


assert(3, longestCommonSubsequence('abcde', 'ace'));
assert(3, longestCommonSubsequence('abc', 'abc'));
assert(0, longestCommonSubsequence('abc', 'def'));


// console.log(
//   longestCommonSubsequence(
//     'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
//     'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
//   )
// );
