/*
seq 1 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]),process.argv[2])' ./clone-graph
*/

const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = ({ cloneGraph, dfs, Node }, n) => loop(Number.parseInt(n) || 1, () => {
  const graph = (list) => {
    const nodes = new Map();
    list.forEach((_, i) => nodes.set(i + 1, new Node(i + 1)));
    list.forEach((vs, i) => vs.forEach(neighbour => nodes.get(i + 1).neighbors.push(nodes.get(neighbour))));
    return nodes.get(1);
  };
  const list = (graph) => {
    if (!graph) { return [] }
    const nodes = new Map();
    const add = (node) => nodes.set(node.val, node.neighbors.map(neighbor => neighbor.val));
    dfs(add)(graph);
    return Array.from(nodes.keys()).sort().map(i => nodes.get(i));
  };
  asserteq([[2,4],[1,3],[2,4],[1,3]], list(cloneGraph(graph([[2,4],[1,3],[2,4],[1,3]]))));
  asserteq([[]], list(cloneGraph(graph([[]]))));
  asserteq([], list(cloneGraph(graph([]))));

  // console.log(new Node(1));
  // console.dir(graph([[2, 4], [1, 3], [2, 4], [1, 3]]), { depth: 10 });
  // console.dir(graph([]));
  // console.log(list(new Node(1)));
  // console.log(list(graph([[2, 4], [1, 3], [2, 4], [1, 3]])));
  // console.log(list(cloneGraph(graph([[2, 4], [1, 3], [2, 4], [1, 3]]))));
  // console.log(list(cloneGraph(graph([[]]))));
  // console.log(list(cloneGraph(graph([]))));
});

module.exports = test;
