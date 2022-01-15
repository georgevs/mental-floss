const eq = (x, y) => {
  if (x === y) { return true }
  if (x instanceof Function || y instanceof Function) { return false }
  if (Array.isArray(x) && Array.isArray(y)) { return x.length === y.length && x.every((v, i) => eq(v, y[i])) }
  if (Object(x) === x && Object(y) === y) { return eq(Object.entries(x).sort(compareKey), Object.entries(y).sort(compareKey)) }
  return false;
};

const compareKey = ([lhs],[rhs]) => lhs.localeCompare(rhs);

const asserteq = (e, r) => console.assert(eq(e, r), 'expected:', e, 'result:', r);

module.exports = { asserteq, eq };


asserteq(true, eq(undefined, undefined));
asserteq(false, eq(1, undefined));
asserteq(false, eq(undefined, 1));
asserteq(false, eq(0, undefined));
asserteq(false, eq(undefined, 0));
asserteq(false, eq('a', undefined));
asserteq(false, eq(undefined, 'a'));
asserteq(false, eq('', undefined));
asserteq(false, eq(undefined, ''));
asserteq(false, eq([], undefined));
asserteq(false, eq(undefined, []));
asserteq(true, eq(1, 1));
asserteq(true, eq(0, 0));
asserteq(true, eq('a', 'a'));
asserteq(true, eq('', ''));
asserteq(true, eq([], []));
asserteq(true, eq([0, 1, '', 'a', [0, 1, '', 'a']], [0, 1, '', 'a', [0, 1, '', 'a']]));
asserteq(false, eq([0, 1, ''], [0, 1, '', 'a']));
asserteq(false, eq([0, 1, '', 'a'], [0, 1, '']));
asserteq(true, eq({}, {}));
asserteq(true, eq({ a: 1 }, { a: 1 }));
asserteq(true, eq([{ a: 1, b: [1] }], [{ a: 1, b: [1] }]));
asserteq(true, eq([{ a: 1, b: [1] }], [{ b: [1], a: 1 }]));
asserteq(false, eq({ a: 1 }, { a: 2 }));
asserteq(false, eq({ a: 1 }, { b: 1 }));
asserteq(false, eq({ a: 1 }, { a: 1, b: 1 }));
