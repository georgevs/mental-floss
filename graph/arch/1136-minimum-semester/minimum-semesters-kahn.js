const minimumSemesters = (n, relations) => kahn(n, relations);

const kahn = (n, xs) => {
  if (n === 1) { return 1 }
  
  const ins = Array(n + 1).fill(0);
  const adj = Array.from(ins, () => []);
  for (const [u, v] of xs) { ++ins[v]; adj[u].push(v) }

  let q = [], k = 0;
  ins.forEach((l, v) => { if (v && l === 0) { q.push(v); ++k } });

  if (q.length === 0) { return -1 }

  let r = 0;
  let q1 = [];
  do {
    const u = q.shift();
    for (const v of adj[u]) {
      if (--ins[v] === 0) { q1.push(v); ++k }
    }
    if (q.length === 0) { q = q1; q1 = []; ++r }
  } while (q.length > 0);

  return k < n ? -1 : r;
};

module.exports = minimumSemesters;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
