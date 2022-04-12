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
  const add = (node) => {
    let r; 
    return nodes.get(node) ?? (nodes.set(node, r = new Node(node.val)), r);
  };
  const dup = (node) => node.neighbors.forEach(neighbor => add(node).neighbors.push(add(neighbor)));
  dfs(dup)(node);
  return add(node);
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
