/*
  g++ -std=c++20 bm.cc -lbenchmark && ./a.out
*/

#include "plus-one-vector.h"
#include "plus-one-deque.h"

#include <benchmark/benchmark.h>

using namespace std;
using namespace benchmark;


template<typename Solution>
static void benchmark_basic(benchmark::State& state) {
  for (auto _ : state) {
    auto result = Solution{}.plusOne({1, 2, 3});
    benchmark::DoNotOptimize(result);
  }
}

template<typename Solution>
static void benchmark_carry(benchmark::State& state) {
  for (auto _ : state) {
    auto result = Solution{}.plusOne({1, 2, 3});
    benchmark::DoNotOptimize(result);
  }
}

BENCHMARK(benchmark_basic<plus_one_vector::Solution>);
BENCHMARK(benchmark_basic<plus_one_deque::Solution>);
BENCHMARK(benchmark_carry<plus_one_vector::Solution>);
BENCHMARK(benchmark_carry<plus_one_deque::Solution>);

BENCHMARK_MAIN();
