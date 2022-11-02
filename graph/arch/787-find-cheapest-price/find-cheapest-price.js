// n,E:[[u,v,w]],s,t,k -> 
const findCheapestPrice = (n, E, s, t, k) => {
  const g = new Graph(n, E);
  // console.log(s, t, k, g);
  let D = g.vertices.map(v => v === s ? 0 : Infinity);
  for (let i = 0; i < k + 1; ++i) {
    // console.log(D);
    const DD = Array.from(D);
    let dirty = false;
    for (const v of g.vertices) {
      for (const [u, , w] of g.incident[v]) {
        DD[v] = Math.min(DD[v], w + D[u]);
        if (!dirty) { dirty = DD[v] !== D[v] }
      }
    }
    if (!dirty) { break }
    D = DD;
  }
  // console.log(D);
  return D[t] !== Infinity ? D[t] : -1;
};

class Graph {
  constructor(n, E) {
    this.vertices = Array.from(Array(n), (_, i) => i);
    this.incident = this.vertices.map(() => []);
    E.forEach(e => { const [, v] = e; this.incident[v].push(e) });
  }
}

module.exports = findCheapestPrice;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
