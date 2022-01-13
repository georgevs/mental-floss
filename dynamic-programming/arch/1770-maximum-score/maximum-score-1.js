// n == ns.length
// m == ms.length
// 1 <= m <= 103
// m <= n <= 105
// -1000 <= ns[i], ms[i] <= 1000

const maximumScore = (ns, ms) => {

};

// const combs = (x, ...xs) => xs.length === 0 ? [[x]] : combs(xs).flatMap(r => [[x].concat(r), r.concat([x])]);
// const combs = ([x, ...xs]) => xs.length === 0 ? [[x]] : combs(xs).flatMap(r => [[x, ...r], [...r, x]]);

const split = (xs) =>
  xs.length <= 1 ? [xs[0]] :
  xs.length <= 2 ? [xs[0], xs[1]] :
  [xs[0], xs[xs.length-1], xs.slice(1, -1)];

// const first = (xs) => xs[0];
// const last = (xs) => xs[xs.length - 1];
// const tail = (xs) => xs.slice(1);
// const heads = (xs) => xs.slice(0, -1);
// const combfl = (f, l) => [[f, l], [l, f]];
// const combxys = (x, ys) => ys.map(y => [x, ...y]);
// const combfxs = (xs) => combxys(first(xs), comb(tail(xs)));
// const comblxs = (xs) => combxys(last(xs), comb(heads(xs)));
// const combxs = (xs) => [...combfxs(xs), ...comblxs(xs)];

// const comb = (xs) => 
//   xs.length <= 1 ? [[first(xs)]] :
//   xs.length <= 2 ? combfl(first(xs), last(xs)) :
//   combxs(xs);



const comb = (xs) => 
  xs.length <= 1 ? combx(xs) :
  xs.length <= 2 ? combxy(xs) :
  combxs(xs);

const combx = (xs) => [[first(xs)]];
const combxy = (xs) => ((f, l) => [[f, l], [l, f]])(first(xs), last(xs));
const combxs = (xs) => [...combfxs(xs), ...comblxs(xs)];
const combfxs = (xs) => combxys(first(xs), comb(tail(xs)));
const comblxs = (xs) => combxys(last(xs), comb(heads(xs)));
const combxys = (x, ys) => ys.map(y => [x, ...y]);

const first = (xs) => xs[0];
const last = (xs) => xs[xs.length - 1];
const tail = (xs) => xs.slice(1);
const heads = (xs) => xs.slice(0, -1);

// console.log(combf(Array.from('abc')));
// console.log(combl(Array.from('abc')));
// console.log(combfl(Array.from('abc')));

// const comb = (xs) => (
//   ([f, l, rs]) => 
//     rs ? [...comb([...rs, l]).map(r => [f, ...r]), ...comb([f, ...rs]).map(r => [l, ...r])] :
//     l ? [[f, l], [l, f]] :
//     [[f]]
// )(split(xs));

// const comb = (xs) => {
//   const r = [];
//   if (xs.length <= 1) {
//     r.push([1]);
//   } 
//   else if (xs.length <= 2) {
//     r.push([xs[0], xs[1]], [xs[1], xs[0]]);
//   }
//   else {
//     const [f, ...rs] = xs;
//     r.push(...comb(rs).map(r => [f, ...r]));

//     const ls = xs.slice();
//     const [l] = ls.splice(-1);
//     r.push(...comb(ls).map(r => [l, ...r]));
//   }
//   return r;
// };




const { asserteq } = require('../../utils/asserteq');

const join = (d = '') => (xs) => xs.join(d);
const combs = (s) => comb(Array.from(s)).map(join());

// console.log(combs('a'));
// console.log(combs('ab'));
// console.log(combs('abc'));

asserteq([ 'abc', 'acb', 'cab', 'cba' ], combs('abc'));
asserteq(['abcd', 'abdc', 'adbc', 'adcb', 'dabc', 'dacb', 'dcab', 'dcba'], combs('abcd'));

asserteq([1], split([1]));
asserteq([1, 2], split([1, 2]));
asserteq([1, 3, [2]], split([1, 2, 3]));
asserteq([1, 4, [2, 3]], split([1, 2, 3, 4]));

// assert(14, maximumScore([1,2,3], [3,2,1]));
// assert(102, maximumScore([-5,-3,-3,-2,7,1], [-10,-5,3,4,6]));
