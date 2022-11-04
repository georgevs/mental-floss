const findOrder = (n, xs) => { 
  // console.log(n, xs);

  const D = Array(n).fill(0);
  xs.forEach(([v]) => { ++D[v] });
  let Z = new Set;
  D.forEach((c, v) => { if (!c) Z.add(v) });
  const R = [];
  
  while (Z.size > 0) {
    // console.log('D', D, 'Z', Z);
    
    R.push(...Z.values());
    const ZZ = new Set;
    for (let [v, u] of xs) {
      if (Z.has(u)) {
        // if (D[v] === 0) { throw Error('Assert') }
        if (--D[v] === 0) { ZZ.add(v) }
      }
    }
    Z = ZZ;
  }
  // console.log('D', D, 'Z', Z);

  // console.log('R', R);
  return D.length === R.length ? R : [];
};

module.exports = findOrder;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
