const longestCommonPrefix = (xs) => {
  let i;
  words: for (i = 0; i < xs[0].length; ++i) {
    for (let k = 1; k < xs.length; ++k) {
      if (xs[0][i] !== xs[k][i]) { break words } 
    }
  }
  return xs[0].substring(0, i);
};

module.exports = longestCommonPrefix;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}

