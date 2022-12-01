const minimumSemesters = (n, relations) => {
  try { return dfs(n, relations) }
  catch { return -1 }
};

class CircularDependencyError extends Error { }

const dfs = (n, xs) => {
  if (n === 1) { return 1 }
  
  const adj = Array.from(Array(n + 1), () => []);
  for (const [u, v] of xs) { adj[u].push(v) }

  const rs = Array(n + 1);

  const visit = (u) => {
    rs[u] = 0;
    let r = 0;
    for (const v of adj[u]) {
      if (rs[v] === 0) { throw CircularDependencyError() }
      if (rs[v] === undefined) { visit(v) }
      r = Math.max(r, rs[v]);
    }
    rs[u] = r + 1;
  };

  let r = 0;
  for (let u = 1; u <= n; ++u) {
    if (rs[u] === undefined) { visit(u) }
    r = Math.max(r, rs[u]);
  }

  return r;
};

module.exports = minimumSemesters;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
