const kthGrammar = (n, k) => {
  const xs = Array.from((2 ** (n-1) + (k-1)).toString(2).substring(1));
  // console.log(n, k, xs);
  let r = 0;
  for (let i = 0; i < n; ++i) {
    r ^= +xs[i];
  }
  return r;
};

module.exports = kthGrammar;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
