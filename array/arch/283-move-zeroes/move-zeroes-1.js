const moveZeroes = (xs) => {
  let r = 0, w = 0, n = xs.length;
  while (r < n) {
    // find block : L r n -> b e 
    let b;
    for (b = r; b < n && xs[b] === 0; ++b) { }
    let e;
    for (e = b; e < n && xs[e] !== 0; ++e) { }
    
    // swap block : L w b e -> w' r'
    let j = w;
    for (let i = b; i < e; ++i, ++j) { xs[j] = xs[i] }
    for (let i = Math.max(b, j); i < e; ++i) { xs[i] = 0 }
    w = j; r = e;
  }
  return xs;
};

module.exports = moveZeroes;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
