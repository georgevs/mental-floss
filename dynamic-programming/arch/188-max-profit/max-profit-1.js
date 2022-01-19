// 0 <= k <= 100
// 0 <= prices.length <= 1000
// 0 <= prices[i] <= 1000

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (k, prices) =>
  Maybe.of(prices)
    .map(subseqs)
    .map(filter(and(valid(k), profitable)))
    .map(map(profit))
    .map(max)
    // .map(tap(log))
    .join();


const valid = k => xs => xs.length % 2 === 0 && (xs.length / 2) <= k; 
const profitable = xs => xs.every((x, i) => even(i) || x - xs[i - 1] > 0);
const profit = xs => xs.reduce((acc, x, i) => acc + (even(i) ? -x : +x), 0);

const subseqs = xs => {
  if (xs.length === 0) { return [] }
  if (xs.length === 1) { return [[xs[0]]] }
  const ys = xs.slice(0, -1), x = xs[xs.length - 1];
  const zs = subseqs(ys);
  return [...zs, [x], ...zs.map(z => [...z, x])];
};

const tap = f => x => (f(x), x);
const log = console.log.bind(console);

const max = Function.apply.bind(Math.max, null);
const even = x => x % 2 === 0;

const ap = f => (g => (...ys) => x => g(x, ys))(Function.apply.bind(f))
const and = (...fs) => fs.reduce((g, f) => x => g(x) && f(x));
const compose = (...fs) => fs.reduce((g, f) => x => g(f(x)));
const pipe = (...fs) => fs.reduce((g, f) => x => f(g(x)));

const filter = ap(Array.prototype.filter);
const map = ap(Array.prototype.map);

const Maybe = ({
  of: x => x === undefined || x === null ? Nothing : Just(x)
});
const Nothing = ({
  join: () => undefined,
  map: () => Nothing,
});
const Just = x => ({
  join: () => x,
  map: f => Maybe.of(f(x)),
});

const { asserteq } = require('../../utils/asserteq');

asserteq(2, maxProfit(2, [2, 4, 1]));
asserteq(7, maxProfit(2, [3, 2, 6, 5, 0, 3]));
