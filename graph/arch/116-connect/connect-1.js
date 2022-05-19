const { logf } = require('./log');

const connect = logf(void 0, (n) => {
  if (n !== null && n.left !== null) { 
    n.left.next = n.right;
    n.right.next = n.next?.left || null;
    connect(n.left);
    connect(n.right);
  }
  return n;
});

module.exports = connect;
