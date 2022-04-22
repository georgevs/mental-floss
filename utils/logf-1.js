const make_logger = ({ d = '.' }) => {
  let pxs, pp, n = 0;

  const prefix = (n, p = '') => [d.repeat(n) + p].filter(Boolean);

  const logger = (log) => (p, fn) => (...xs) => {
    if (pxs) { log(...prefix(n - 1, pp), ...pxs, ':') }
    pxs = xs, pp = p;
    ++n; 
    
    const r = fn && fn(...xs);
    
    --n;
    log(
      ...(pxs ? [...prefix(n, pp), ...pxs] : [d.repeat(n)]),
      ...(fn ? ['->', r] : [])
    );
    pxs = pp = undefined;

    return r;
  };

  return logger;
};

const logger = make_logger({});
const logf = logger(console.log.bind(console));
const log = logger(console.log.bind(console))();
const dbg = logger(console.debug.bind(console))();

module.exports = { logger, logf, log, dbg };
