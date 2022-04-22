const logff = (log, c = '.') => {
  let ps, pp, n = 0;
  const logf = (p, fn) => {
    const lfn = (...args) => {
      if (ps) { log(c.repeat(n - 1) + pp, ...ps, ':') }
      ps = args, pp = p;
      ++n; const r = fn(...args); --n;
      if (ps) { log(c.repeat(n) + p, ...args, '->', r) }
      else { log(c.repeat(n) + '->', r) }
      ps = pp = undefined;
      return r;
    };
    return p ? lfn : noop;
  };
  return logf;
};

const noop = (_, fn) => fn;
const logf = logff(console.log.bind(console));

module.exports = { logff, logf, noop };

// const foo = logf('foo', (n) => goo(n - 1));
// const goo = logf('goo', (n) => boo(n - 1));
// const boo = logf('boo', (n) => n);
// foo(3);
