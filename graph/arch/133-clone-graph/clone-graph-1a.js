// The number of nodes in the graph is in the range [0, 100].
// 1 <= Node.val <= 100
// Node.val is unique for each node.
// There are no repeated edges and no self-loops in the graph.
// The Graph is connected and all nodes can be visited starting from the given node.

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
};

// cloneGraph :: Node -> Node
const cloneGraph = (node) => {
  if (!node) { return node }
  const nodes = new Map();
  const dup = (node) => nodes.has(node) || nodes.set(node, new Node(node.val));
  const connect = (node) => node.neighbors.forEach(neighbor => nodes.get(node).neighbors.push(nodes.get(neighbor)));
  dfs(dup)(node);
  dfs(connect)(node);
  return nodes.get(node);
};

const dfs = (fn) => (node) => {
  const visited = new Set([undefined]);
  const visit = (node) => {
    if (!visited.has(node)) {
      visited.add(node);
      Array.from(node.neighbors).forEach(visit);
      fn(node);
    }
  };
  visit(node);
};

module.exports = { cloneGraph, dfs, Node };
