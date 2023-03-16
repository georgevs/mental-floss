const mysql = require('mysql2');
const fs = require('fs');
const childProcess = require('child_process');
const util = require('util');
const { asserteq } = require('../../../utils/asserteq');

const execAsync = util.promisify(childProcess.exec);
const loadFile = path => fs.readFileSync(path, 'utf-8');

const loop = (n, fn) => n <= 0 ? Promise.resolve() : fn(n).then(() => loop(n - 1, fn));
const test = (visits, n) => loop(n || 1, async () => {

  await execAsync('mysql < schema.sql');

  const db = mysql.createConnection({
    host: '172.20.0.201',
    port: 3306,
    user: 'root',
    password: 'LikeBeingThere',
    database: 'leetcode'
  });
  db.connect();
  try {
    
    await execAsync('mysql leetcode < data.sql');
    
    asserteq([[30, 1], [96, 1], [54, 2]], await visits(db));
  } finally {
    db.end();
  }
});

const visits = sql => db => new Promise((resolve, reject) => {
  db.query(sql, (err, results) => { 
    if (err) { reject(err) }
    else { resolve(results.map(({ customer_id, count_no_trans }) => [customer_id, count_no_trans])) }
  });
});

module.exports = test;

if (require.main === module) {
  Promise.resolve()
  .then(() => test(visits(loadFile('./visits-1.sql'))))
  .then(() => test(visits(loadFile('./visits-2.sql'))));
}
