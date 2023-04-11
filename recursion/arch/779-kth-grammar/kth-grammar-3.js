const kthGrammar = (n, k) => {
  const iter = (i, j) => (
    i < n ? iter(i + 1, j / 2 | 0) ^ j % 2
      : 0
  );
  return iter(0, k - 1);
};

module.exports = kthGrammar;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
