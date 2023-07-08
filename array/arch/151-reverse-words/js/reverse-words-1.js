const reverseWords = (s) => (
  s.split(' ')
    .filter(Boolean)
    .reverse()
    .join(' ')
);

module.exports = reverseWords;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
