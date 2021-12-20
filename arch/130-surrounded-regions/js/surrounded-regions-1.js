const { assert } = require("console");

const solve = (board) => {

};

const bordersCount = (m, n) => m > 0 && n > 0 ? (Math.min(m, n) + 1) / 2 | 0 : 0;


// m rows, n cols


// border :: (m, n) -> k -> [p]
const border = (m, n) => {
  const c = bordersCount(m, n);
  return k => {
    const vs = [];
    if (k < c) {
      const l = k, t = k, r = Math.max(l, n - k - 1), b = Math.max(t, m - k - 1);
      for (let x = l; x <= r; ++x) vs.push([ x, t ]);
      for (let y = t + 1; y <= b; ++y) vs.push([ r, y ]);
      if (t < b) for (let s = l, e = r, x = e; x-- > s; ) vs.push([ x, b ]);
      if (l < r) for (let s = t + 1, e = b, y = e; y-- > s; ) vs.push([ l, y ]);
    }
    return vs;
  };
};

const point = (m, n) => (x, y) => 0 <= x && x < n && 0 <= y && y < m ? [x, y] : undefined;

// adj :: (m, n) -> p -> (o, b, i)
const adjacent = (m, n) => {
  const c = bordersCount(m, n);
  const pt = point(m, n);
  return ([x, y]) => {
    const l = pt(x - 1, y), t = pt(x, y - 1), r = pt(x + 1, y), b = pt(x, y + 1);
    if (x === y) return [[l, t], [r, b], []];
    if (n - x - 1 === y) return [[t, r], [l, b], []];
    if (n - x - 1 === m - y - 1) return [[r, b], [t, l], []];
    if (x === m - y - 1) return [[l, b], [t, r], []];

    if (y + 1 <= x && x < n - y - 1) {
      if (0 <= c - 1 && c - 1 === y) return [[t, b], [l, r], []];
      if (0 <= c - 2 && c - 2 === y) return [[t], [l, r, b], []];
      if (0 <= c - 2 && c - 2 === m - 1 - y) return [[b], [l, t, r], []];
      if (0 <= c - 3 && c - 3 === y) return [[t], [l, r], [b]];
      if (0 <= c - 3 && c - 3 === m - 1 - y) return [[b], [l, r], [t]];
    }

    if (x + 1 <= y && y < m - x - 1) {
      if (0 <= c - 1 && c - 1 === x) return [[l, r], [t, b], []];
      if (0 <= c - 2 && c - 2 === x) return [[l], [t, r, b], []];
      if (0 <= c - 2 && c - 2 === n - 1 - x) return [[r], [l, t, b], []];
      if (0 <= c - 3 && c - 3 === x) return [[t], [l, r], [b]];
      if (0 <= c - 3 && c - 3 === n - 1 - x) return [[b], [l, r], [t]];
    }
  }
};






const arrayEq = (xs, ys) =>
  (xs === undefined & ys === undefined) ||
  (xs && ys && xs.length == ys.length && xs.every((x, i) => x === ys[i]));






[
 [0, 0, 0, []], [0, 1, 0, []], [1, 0, 0, []],
 [1, 1, 0, [[0,0]]], [1, 1, 1, []],
 [2, 2, 0, [[0,0], [1,0], [1,1], [0,1]]], [2, 2, 1, []],

 [3, 3, 0, [[0,0], [1,0], [2,0], [2,1], [2,2], [1,2], [0,2], [0,1]]],
 [3, 3, 1, [[1,1]]], [3, 3, 2, []], [3, 3, 3, []],

 [1, 2, 0, [[0,0], [1,0]]], [1, 2, 1, []],
 [2, 1, 0, [[0,0], [0,1]]], [2, 1, 1, []],

 [3, 1, 0, [[0,0], [0,1], [0,2]]], [3, 1, 1, []],
 [1, 3, 0, [[0,0], [1,0], [2,0]]], [1, 3, 1, []],
].map(([m, n, v, e], i, t) => { const r = border(m, n)(v); console.assert(arrayEq(r.flat(), e.flat()), ...[...t[i], r]) });



[[0, 0, 0], [0, 1, 0], [1, 0, 0],
 [1, 1, 1], [2, 2, 1], [3, 3, 2], [4, 4, 2], [5, 5, 3],
 [1, 10, 1], [2, 10, 1], [3, 10, 2], [4, 10, 2], [5, 10, 3],
 [10, 1, 1], [10, 2, 1], [10, 3, 2], [10, 4, 2], [10, 5, 3],
].map(([m, n, e], i, t) => { const r = bordersCount(m, n); console.assert(r === e, [...t[i], r]) });

module.exports = { solve };
