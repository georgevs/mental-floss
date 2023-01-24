const reverseWords = (s) => {
  let xs = Array.from(s);
  xs = trim(xs);
  xs = reverse(xs);
  xs = reverseWordsInString(xs)
  return xs.join('');
};

const reverseWordsInString = (xs) => {
  let r = 0, n = xs.length;
  for (; r < n;) {
    for (; r < n && xs[r] === ' '; ++r) { }
    if (r === n) { break }
    let b = r;
    for (++r; r < n && xs[r] !== ' '; ++r) { }
    let e = r - 1;
    for (; b < e; ++b, --e) { const t = xs[b]; xs[b] = xs[e]; xs[e] = t }
  }
  return xs;
};

const reverse = (xs) => {
  for (let b = 0, e = xs.length - 1; b < e; b++, e--) {
    const t = xs[b]; xs[b] = xs[e]; xs[e] = t
  }
  return xs;
};

const trim = (xs) => {
  let r = 0, w = 0, n = xs.length;
  for (; ;) {
    for (; r < n && xs[r] === ' '; ++r) { }
    if (r === n) { break }
    if (w > 0) { xs[w++] = ' ' }
    for (; r < n && xs[r] !== ' '; ++r, ++w) { if (w < r) xs[w] = xs[r] }
    if (r === n) { break }
  }
  return xs.slice(0, w);
};

module.exports = reverseWords;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
