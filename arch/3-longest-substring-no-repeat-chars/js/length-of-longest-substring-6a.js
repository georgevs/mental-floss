const pipe = (...fns) => fns.reduce((g, f) => x => f(g(x)));
const id = x => x;
const unique = xs => new Set(xs);

const imap = fn => function*(xs) {
  for (let x of xs) {
    yield fn(x);
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

const memoize = fn => {
  const m = new Map();
  return x => m.get(x) ?? m.set(x, fn(x)).get(x);
};

const max = fn => reduce((acc, x) => acc < fn(x) ? fn(x) : acc, 0);

const length = ({ length }) => length;

const hasRepeatingCharacter = s => Array.from(new Set(s)).length !== s.length;

const hasRepeatingCharacterM = memoize(hasRepeatingCharacter);

const isubstrings = charset => function*(s) {
  for (let i = 0; i < s.length; ++i) {
    const len = Math.min(s.length, i + charset.length);
    for (let j = i + 1; j <= len; ++j) {
      const ss = s.substring(i, j);
      if (hasRepeatingCharacterM(ss)) break;
      yield ss;
    }
  }
};

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";

const lengthOfLongestSubstring = pipe(
  isubstrings(charset),
  unique,
  imap(length),
  max(id),
);

module.exports = { lengthOfLongestSubstring };
