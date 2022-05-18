/*
seq 1 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]),process.argv[2])'
*/

// vertices
const [A, B, C, D, E, F] = Array.from("ABCDEF").map(v => [v]);
const vs = new Set([A, B, C, D, E, F]);

// edges
const xs = [
  [A,B], [A,C], [A,D],
  [B,A], [B,E], [B,F],
  [C,A], [C,E], 
  [D,A], [D,E], 
  [E,B], [E,C], [E,D], [E,F],
  [F,B], [F,E]
];

const { asserteq } = require('../../utils/asserteq');
const { graph } = require('./graph');
const { log } = require('./log');

const test = ({ enumVertices, enumPaths }, n) => loop(Number.parseInt(n) || 1, () => {
  const g = graph(vs, xs);
  
  if (enumVertices) {
    const vertices = acc(enumVertices);
    asserteq([A, B, C, D, E, F], sortVertices(vertices(g)));
  }

  if (enumPaths) {
    const paths = acc(enumPaths);
    log(paths(g, A, B));
    asserteq(sortPaths([[A, B], [A, C, E, B], [A, C, E, F, B], [A, D, E, B], [A, D, E, F, B]]), sortPaths(paths(g, A, B)));
  }
});

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const acc = (fn) => (...args) => { const r = []; fn(Array.prototype.push.bind(r))(...args); return r };

const sortVertices = (vs) => vs && vs.sort(compareVertices);
const sortPaths = (ps) => ps && ps.sort(comparePaths);

const compareVertices = ([l], [r]) => l.localeCompare(r);

const comparePaths = (l, r) => {
  x = l.length - r.length;
  if (x != 0 || l.length == 0) { return x }
  
  const [lh, ...lt] = l;
  const [rh, ...rt] = r;
  x = compareVertices(lh, rh);
  if (x != 0) { return x }

  return comparePaths(lt, rt);
};

module.exports = test;
