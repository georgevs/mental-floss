const findOrder = (n, xs) => { 
  // console.log(n, xs);

  const D = Array(n).fill(0);
  const E = new Map;
  xs.forEach(([v, u]) => { ++D[v]; (E.get(u) ?? E.set(u,[]).get(u)).push(v) });
  
  let Z = [];
  D.forEach((c, v) => { if (!c) Z.push(v) });

  const R = [];
  
  while (Z.length > 0) {
    // console.log('D', D, 'Z', Z);
    const u = Z.shift(); 
    R.push(u);

    if (E.has(u)) {
      for (const v of E.get(u)) {
        if (D[v] === 0) { throw Error('Assert') }
        if (--D[v] === 0) { Z.push(v) }
      }
    }
  }
  // console.log('D', D, 'Z', Z);

  // console.log('R', R);
  return D.length === R.length ? R : [];
};

module.exports = findOrder;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
