/*
  g++ -std=c++20 bm.cc -lbenchmark && ./a.out
*/

#include "merge-span.h"
#include "merge-stl.h"

#include <benchmark/benchmark.h>

using namespace std;
using namespace benchmark;


template<typename Solution>
static void benchmark_basic(benchmark::State& state) {
  for (auto _ : state) {
    auto rs = vector{1, 2, 3, 0, 0, 0};
    auto ys = vector{2, 5, 6};
    Solution().merge(rs, 3, ys, 3);
  }
}

BENCHMARK(benchmark_basic<merge_stl::Solution>);
BENCHMARK(benchmark_basic<merge_span::Solution>);

BENCHMARK_MAIN();
