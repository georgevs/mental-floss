const eq = (x, y) => 
  x === y ||
  Array.isArray(x) && Array.isArray(y) && x.length === y.length && x.every((v, i) => eq(v, y[i]));

const assert = (e, r) => console.assert(eq(e, r), `expected: ${e}, result: ${r}`);

module.exports = { assert, eq };


assert(true, eq(undefined, undefined));
assert(false, eq(1, undefined));
assert(false, eq(undefined, 1));
assert(false, eq(0, undefined));
assert(false, eq(undefined, 0));
assert(false, eq('a', undefined));
assert(false, eq(undefined, 'a'));
assert(false, eq('', undefined));
assert(false, eq(undefined, ''));
assert(false, eq([], undefined));
assert(false, eq(undefined, []));
assert(true, eq(1, 1));
assert(true, eq(0, 0));
assert(true, eq('a', 'a'));
assert(true, eq('', ''));
assert(true, eq([], []));
assert(true, eq([0, 1, '', 'a', [0, 1, '', 'a']], [0, 1, '', 'a', [0, 1, '', 'a']]));
assert(false, eq([0, 1, ''], [0, 1, '', 'a']));
assert(false, eq([0, 1, '', 'a'], [0, 1, '']));
