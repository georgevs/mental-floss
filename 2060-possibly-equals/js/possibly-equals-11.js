// const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });
// const prompt = text => new Promise(resolve => rl.question(text, resolve));

const possiblyEquals = (s1, s2) => {
  const q = [[split(s1 + '.'), split(s2 + '.')]];
  let i = 0;
  while (q.length > 0) {
    const [l1, l2] = q.shift();
    
    // console.log(q.length, l1, l2);
    // if (++i % 100000 == 0) 
    // await prompt('');

    if (eq(l1, l2, q)) return true;
  }
  return false;
};

const eq = ([ch1, ns1, r1], [ch2, ns2, r2], q) => {
  if (ch1 === '.' && ch2 === '.') return true;

  if (ch1 && ch2) {
    if (ch1 == ch2) q.unshift([split(r1), split(r2)]);
    return false;
  } 

  if (ch1 === '.' || ch2 === '.') return false;

  if (ch1 && ns2) {
    const ns = dec(ns2, 1);
    q.unshift([split(r1), ns.length > 0 ? [undefined, ns, r2] : split(r2)]);
    return false;
  }

  if (ns1 && ch2) {
    const ns = dec(ns1, 1);
    q.unshift([ns.length > 0 ? [undefined, ns, r1] : split(r1), split(r2)]);
    return false;
  }

  const s = new Set();
  for (const n1 of ns1) {
    for (const n2 of ns2) {
      s.add(n1 - n2);
    }
  }
  const ns = Array.from(s).sort((n1, n2) => Math.abs(n2) - Math.abs(n1));
  // console.log(ns);
  for (const n of ns) {
    if (n > 0) { q.unshift([[undefined, [n], r1], split(r2)]) }
    else if (n < 0) { q.unshift([split(r1), [undefined, [-n], r2]]) }
    else { q.unshift([split(r1), split(r2)]) }
  }
  return false;
};

const split = s => {
  if (!isDigit(s[0])) {
    return [s[0], undefined, s.substring(1)];
  }
  const ns = [Number(s[0])];
  let i = 1;
  for ( ; i < s.length && isDigit(s[i]); ++i) { ns.push(Number(s[i])) }
  return [undefined, numbers(ns), s.substring(i)];
};

const dec = (ns, d) => ns.reduce((acc, n) => { if (n > d) acc.push(n - d); return acc }, []);

const isDigit = ch => '123456789'.includes(ch);

const numbers = ns => {
  const [i, j, k] = [0, 0].concat(ns).slice(-3);
  return Array.from(new Set([
    i + j + k, 
    i * 10 + j + k, i + j * 10 + k,
    i * 100 + j * 10 + k
  ])).sort((i, j) => i - j);
};

module.exports = { possiblyEquals };

// const test = 'internationalization';
// const test = '248d222d714d496d618d882d561d275d824d234';
// const test = 'v816u32v813u84v4v12u393v877';
// const test = 'l123e';
// const test = '44';
// const test = '123e';
// const test = '23e';
// const test = '23';
// console.log(transform(test));
// console.log(split(test));

// possiblyEquals('l123e', '44');
// possiblyEquals('v816u32v813u84v4v12u393v877', '586v993u497u836u9v59v83u34v8');
// possiblyEquals('248d222d714d496d618d882d561d275d824d234', 'd677d992d986d292d595d744d187d528d999d');
