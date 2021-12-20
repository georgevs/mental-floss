const pipe = (...fns) => fns.reduce((g, f) => x => f(g(x)));
const filter = fn => xs => xs.filter(fn);
const map = fn => xs => xs.map(fn);
const not = fn => x => !fn(x);
const tap = fn => x => { fn(x); return x };
const log = console.log.bind(console);
const id = x => x;

const max = fn => xs => xs.length && xs.reduce((acc, x) => acc < fn(x) ? fn(x) : acc);

const length = ({ length }) => length;

const isubstrings = s => {
  let i = 0, j = 1;
  const next = () => {
    if (s.length <= i) return { done: true };
    const r = { done: false, value: s.substring(i, j) };
    if (j < s.length) { ++j }
    else { ++i; j = i + 1 };
    return r;
  };
  return { 
    next,
    [Symbol.iterator]() { return this }
  };
};

const substrings = s => Array.from(isubstrings(s));

const hasRepeatingCharacter = s => {
  const m = new Set();
  return Array.from(s).some(x => m.has(x) || (m.add(x), false));
};

const lengthOfLongestSubstring = pipe(
  substrings,
  filter(not(hasRepeatingCharacter)),
  map(length),
  max(id),
);

module.exports = { lengthOfLongestSubstring };
