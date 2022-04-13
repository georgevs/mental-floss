/*
seq 1 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]),process.argv[2])' ./find-itinerary
*/

const { asserteq } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (findItinerary, n) => loop(Number.parseInt(n) || 1, () => {
  asserteq(["JFK","MUC","LHR","SFO","SJC"], findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]));
  asserteq(["JFK","ATL","JFK","SFO","ATL","SFO"], findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]));
  asserteq(["JFK", "NRT", "JFK", "KUL"], findItinerary([["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]]));
});

module.exports = test;
