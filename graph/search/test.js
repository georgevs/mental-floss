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

const test = ({ graph, dfsVertices, dfsPaths }, n) => loop(Number.parseInt(n) || 1, () => {
  const g = graph(vs, xs);
  const vertices = acc(dfsVertices);
  const paths = acc(dfsPaths);
  asserteq([C, D, F, E, B, A], vertices(g));
  asserteq([[A, B], [A, C, E, B], [A, C, E, F, B], [A, D, E, B], [A, D, E, F, B]], paths(g, A, B));
});

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const acc = (fn) => (...args) => { const r = []; fn(Array.prototype.push.bind(r))(...args); return r };

module.exports = test;
