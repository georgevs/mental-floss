const { performance } = require('perf_hooks');
// const { possiblyEquals } = require('./possibly-equals-1');  // 4231
// const { possiblyEquals } = require('./possibly-equals-2');  // 33
// const { possiblyEquals } = require('./possibly-equals-3'); // 10x1000 = 93
// const { possiblyEquals } = require('./possibly-equals-4'); // 10x1000 = 90

// const { possiblyEquals } = require('./possibly-equals-5');

// const { possiblyEquals } = require('./possibly-equals-6'); 
// const { possiblyEquals } = require('./possibly-equals-8');  // very slow
// const { possiblyEquals } = require('./possibly-equals-8a');  // even slower
// const { possiblyEquals } = require('./possibly-equals-9');

// const { possiblyEquals } = require('./possibly-equals-10');
// const { possiblyEquals } = require('./possibly-equals-10b');

// const { possiblyEquals } = require('./possibly-equals-11');  //<---
// const { possiblyEquals } = require('./possibly-equals-11a');
// const { possiblyEquals } = require('./possibly-equals-11b');  //<---


// const { possiblyEquals } = require('./possibly-equals-5');  //<---
// const { possiblyEquals } = require('./possibly-equals-5a');
// const { possiblyEquals } = require('./possibly-equals-11b');  //<---

// const { possiblyEquals } = require('./possibly-equals-100');  //<---
// const { possiblyEquals } = require('./possibly-equals-101');

// const { possiblyEquals } = require('./possibly-equals-12');
// const { possiblyEquals } = require('./possibly-equals-12a');
// const { possiblyEquals } = require('./possibly-equals-12b');

const { possiblyEquals } = require('./possibly-equals-13');

const solution = tests => {
  for (const { s1, s2, e } of tests) {
    const r = possiblyEquals(s1, s2);
    if (r !== e) {
      console.log('failed:', [s1, s2, e]);
      throw Error();
    }
  }
};

const tests = [
  // { s1: 'internationalization', s2: 'i18n', e: true },
  // { s1: 'l123e', s2: '44', e: true }, // leetcode
  // { s1: 'a5b', s2: 'c5b', e: false },
  // { s1: '112s', s2: 'g841', e: true }, // gaaaaaaaaaaaas
  // { s1: 'ab', s2: 'a2', e: false }, // gaaaaaaaaaaaas
  // { s1: 'v816u32v813u84v4v12u393v877', s2: '586v993u497u836u9v59v83u34v8', e: false },
     { s1: 'v375v736v443v897v633v527v781v121v317', s2: '475v899v753v784v438v415v431v216v968', e: false },
  // { s1: '248d222d714d496d618d882d561d275d824d234', s2: 'd677d992d986d292d595d744d187d528d999d', e: true },
  // { s1: '826c534c496c921c983c584c944c613c765c83', s2: 'c836c194c634c624c685c192c434c153c821c6', e: true },
  //    { s1: '64g97q959g531q54g576g491q611g362g', s2: '9g157q83q57q9g465q92q554g23g41q47', e: false },
  // { s1: 'a123b123c123d123e123f123g123h123i123j', s2: 'a123b123c123d123e123f123g123h123i123j', e: true },
  // { s1: 'a123b123c123d123e123f123g123h123i123j', s2: '123b123c123d123e123f123g123h123i123j', e: false },
];

// const m = 10, n = 1000;
const m = 1, n = 1;

for (let j = 0; j < m; ++j) {
  const t = performance.now();
  for (let i = 0; i < n; ++i) {
    solution(tests);
  }
  console.log(performance.now() - t);
}
