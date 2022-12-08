const generate = (n) => {
  const r = [[1]];
  for (let i = 1; i < n; ++i) {
    const rr = [1];
    for (let j = 1; j < i; ++j) {
      rr.push(r[i-1][j - 1] + r[i-1][j]);
    }
    rr.push(1);
    r.push(rr);
  }
  return r;
};

module.exports = generate;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
