const kthGrammar = (n, k) => {
  const m = Math.ceil(Math.log2(k));
  console.log(n, k, m);
  let xs = [0];
  for (let i = 0; i < m; ++i) {
    // console.log(xs);
    const ys = xs.map(x => x === 0 ? 1 : 0);

    // xs.push(...ys);
    xs=xs.concat(ys);
  }
  // console.log(xs);
  return xs[k - 1];
};

module.exports = kthGrammar;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
