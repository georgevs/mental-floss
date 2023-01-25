const reverseWords = (s) => {
  const xs = Array.from(s);

  let r = 0, n = xs.length;
  for (; ;) {
    for (; r < n && xs[r] === ' '; ++r) { }
    if (r === n) { break }
    let b = r;
    for (++r; r < n && xs[r] !== ' '; ++r) { }
    let e = r;
    for (; b < e--; ++b) { let t = xs[b]; xs[b] = xs[e]; xs[e] = t }
  }
  
  return xs.join('');
};

module.exports = reverseWords;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
