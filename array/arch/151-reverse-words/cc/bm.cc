/*
  g++ -std=c++20 bm.cc -lbenchmark && ./a.out
*/

#include "reverse-words-regex-token.h"
#include "reverse-words-regex.h"
#include "reverse-words-stack.h"
#include "reverse-words.h"

#include <benchmark/benchmark.h>

using namespace std;
using namespace benchmark;


template<typename Solution>
static void benchmark_basic(benchmark::State& state) {
  for (auto _ : state) {
    auto result = Solution().reverseWords("the sky is blue");
    benchmark::DoNotOptimize(result);
  }
}

BENCHMARK(benchmark_basic<reverse_words_regex_token::Solution>);
BENCHMARK(benchmark_basic<reverse_words_regex::Solution>);
BENCHMARK(benchmark_basic<reverse_words_stack::Solution>);
BENCHMARK(benchmark_basic<reverse_words::Solution>);

BENCHMARK_MAIN();
