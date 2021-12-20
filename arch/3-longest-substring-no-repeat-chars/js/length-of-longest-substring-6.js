const pipe = (...fns) => fns.reduce((g, f) => x => f(g(x)));
const not = fn => x => !fn(x);
// const tap = fn => x => { fn(x); return x };
// const log = console.log.bind(console);
const id = x => x;

const imap = fn => function*(xs) {
  for (let x of xs) {
    yield fn(x);
  }
};

const ifilter = fn => function*(xs) {
  for (let x of xs) {
    if (fn(x)) yield x;
  }
};

const reduce = (fn, seed) => xs => {
  let it = xs[Symbol.iterator]();
  let acc = seed ?? it.next().value;
  for (let { done, value } = it.next(); !done; { done, value } = it.next()) {
      acc = fn(acc, value);
  }
  return acc;
};

const max = fn => reduce((acc, x) => acc < fn(x) ? fn(x) : acc, 0);

const length = ({ length }) => length;

const hasRepeatingCharacter = s => {
  const m = new Set();
  return Array.from(s).some(x => m.has(x) || (m.add(x), false));
};

const isubstrings = charset => function*(s) {
  for (let i = 0; i < s.length; ++i) {
    const len = Math.min(s.length, i + charset.length);
    for (let j = i + 1; j <= len; ++j) {
      const ss = s.substring(i, j);
      if (hasRepeatingCharacter(ss)) break;
      yield ss;
    }
  }
};

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";

const newSet = xs => new Set(xs);

const lengthOfLongestSubstring = pipe(
  isubstrings(charset),
  newSet,
  imap(length),
  max(id),
);

module.exports = { lengthOfLongestSubstring };
