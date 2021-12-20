const pipe = (...fns) => fns.reduce((g, f) => x => f(g(x)));
const filter = fn => xs => xs.filter(fn);
const map = fn => xs => xs.map(fn);
const not = fn => x => !fn(x);
const tap = fn => x => { fn(x); return x };
const log = console.log.bind(console);

const max = xs => xs.reduce((acc, x) => acc < x ? x : acc, 0);

const length = ({ length }) => length;

const substrings = s => 
  s.split('')
  .map((_, i, xs) => xs.slice(i))
  .flatMap(xs => xs.reduce(({ r, i }, x) => ({ r: [...r, i + x], i: i + x }), { r: [], i: '' }).r);

// const substrigs1 = s => {
//   const ys = [];
//   for (let i = 0; i < s.length; ++i) {
//     for (let j = i + 1; j <= s.length; ++j) {
//       ys.push(s.substring(i, j));
//     }
//   }
//   return ys;
// }

const hasRepeatingCharacter = s => Array.from(new Set(s)).length < s.length;

const lengthOfLongestSubstring = pipe(
  substrings,
  filter(not(hasRepeatingCharacter)),
  map(length),
  max,
);

module.exports = { lengthOfLongestSubstring };
