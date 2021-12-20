const possiblyEquals = (s1, s2) => {
  transform(s1);
  transform(s2);
  return false;
};

const transform = str => {
  const r = [];
  for (let i = 0, ns = [0], s = ''; i < str.length; ) {
    const xs = [];
    for ( ; i < str.length && isDigit(str[i].charCodeAt(0)); ++i) { xs.push(Number(str[i])) }
    const b = i;
    for ( ; i < str.length && !isDigit(str[i].charCodeAt(0)); ++i) {}
    ns = add(s.length, ns, numbers(xs));
    s = b < i ? str.substring(b, i) : '.';
    r.push({ ns, s });
  }
  return r;
};

const isDigit = x => 49 <= x && x <= 57;

const numbers = ([i, j, k]) => {
  if (i && j && k) return [...new Set([
    i + j + k,
    i * 10 + j + k, i + j * 10 + k,
    i * 100 + j * 10 + k
  ])];
  if (i && j) return [i + j, i * 10 + j];
  if (i) return [i];
  return [0];
};

const add = (len, ns1, ns2) => {
  const ns = new Set();
  for (const n1 of ns1) {
    for (const n2 of ns2) {
      ns.add(len + n1 + n2);
    }
  }
  return Array.from(ns).sort((i, j) => i - j);
}

module.exports = { possiblyEquals };

// const test = 'internationalization';
// const test = '248d222d714d496d618d882d561d275d824d234';
// const test = 'v816u32v813u84v4v12u393v877';
// const test = 'l123e';
// const test = '44';
const test = 'a12b34c';
// const test = '123e';
// const test = '23e';
// const test = '23'; 
// const test = 'a123b123c123d123e123f123g123h123i123j';
console.dir([test, transform(test)], { depth: 10 });

// possiblyEquals('l123e', '44');
// possiblyEquals('v816u32v813u84v4v12u393v877', '586v993u497u836u9v59v83u34v8');
// possiblyEquals('248d222d714d496d618d882d561d275d824d234', 'd677d992d986d292d595d744d187d528d999d');
