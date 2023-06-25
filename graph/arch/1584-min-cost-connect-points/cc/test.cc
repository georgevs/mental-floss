/*
  Build and run:
  g++ -std=c++20 -o ./bin/test test.cc -lgtest && ./bin/test
*/

#include <gtest/gtest.h>

#include <iostream>

#include "disjoint_set.h"
#include "graph.h"
#include "min_cost_connect_points.h"
#include "min_cost_connect_points_kruskal.h"
#include "min_cost_connect_points_prim.h"

using namespace std;
using namespace testing;

TEST(priority_queue_test, test_basic) {
  auto comp = [](const edge_t& lhs, const edge_t& rhs) {
    return lhs[2] > rhs[2];
  };
  using edges_priority_queue =
      priority_queue<edge_t, vector<edge_t>, decltype(comp)>;

  vector<edge_t> xs{{0, 1, 1}, {2, 3, 20}, {1, 2, 2}, {1, 3, 10}};
  edges_priority_queue pq{xs.begin(), xs.end(), comp};

  vector<edge_t> ys;
  while (!pq.empty()) {
    ys.push_back(pq.top());
    pq.pop();
  }
  ASSERT_EQ((vector<edge_t>{{0, 1, 1}, {1, 2, 2}, {1, 3, 10}, {2, 3, 20}}), ys);
}

TEST(disjoint_set_test, test_basic) {
  disjoint_set ds{7};

  ASSERT_TRUE(ds.connect(0, 1));
  ASSERT_TRUE(ds.connect(1, 2));
  ASSERT_FALSE(ds.connect(0, 2));

  ASSERT_TRUE(ds.connect(4, 3));
  ASSERT_TRUE(ds.connect(5, 4));
  ASSERT_FALSE(ds.connect(5, 3));

  ASSERT_EQ(ds.find(0), ds.find(2));
  ASSERT_EQ(ds.find(3), ds.find(5));
  ASSERT_NE(ds.find(0), ds.find(6));
  ASSERT_NE(ds.find(3), ds.find(6));
}

TEST(distance_test, test_basic) {
  ASSERT_EQ(10, distance(point_t{0, 0}, point_t{0, 10}));
  ASSERT_EQ(10, distance(point_t{0, 0}, point_t{10, 0}));
  ASSERT_EQ(10, distance(point_t{0, 10}, point_t{0, 0}));
  ASSERT_EQ(10, distance(point_t{10, 0}, point_t{0, 0}));
  ASSERT_EQ(11, distance(point_t{10, 1}, point_t{20, 2}));
}

vector<edge_t> sort(vector<edge_t> xs) {
  sort(xs.begin(), xs.end(), [](const edge_t& lhs, const edge_t& rhs) {
    if (lhs[0] < rhs[0]) {
      return true;
    }
    if (lhs[0] > rhs[0]) {
      return false;
    }
    if (lhs[1] < rhs[1]) {
      return true;
    }
    if (lhs[1] > rhs[1]) {
      return false;
    }
    return lhs[2] < rhs[2];
  });
  return xs;
}

void test_basic(vector<edge_t> (*mst)(size_t n, vector<edge_t>&& xs)) {
  ASSERT_EQ((vector<edge_t>{{0, 1, 1}, {1, 2, 2}, {1, 3, 10}}),
            sort(mst(4, vector<edge_t>{
                            {0, 1, 1}, {1, 2, 2}, {1, 3, 10}, {2, 3, 20}})));
}

TEST(kruskal_test, test_basic) { test_basic(kruskal); }

TEST(prim_test, test_basic) {
  auto prim_ = [](size_t n, vector<edge_t>&& xs) -> vector<edge_t> {
    return prim_lazy(graph_t{n, xs});
  };
  test_basic(prim_);
}

void test_basic(int (*minCostConnectPoints)(vector<point_t> pts)) {
  ASSERT_EQ(20, minCostConnectPoints(
                    vector<point_t>{{0, 0}, {2, 2}, {3, 10}, {5, 2}, {7, 0}}));
  ASSERT_EQ(18,
            minCostConnectPoints(vector<point_t>{{3, 12}, {-2, 5}, {-4, 1}}));
}

TEST(SolutionKruskalTest, test_basic) {
  auto minCostConnectPoints = [](vector<point_t> pts) {
    return SolutionKruskal{}.minCostConnectPoints(pts);
  };
  test_basic(minCostConnectPoints);
}

TEST(SolutionPrimTest, test_basic) {
  auto minCostConnectPoints = [](vector<point_t> pts) {
    return SolutionPrim{}.minCostConnectPoints(pts);
  };
  test_basic(minCostConnectPoints);
}

TEST(graph_test, test_basic) {
  graph_t g(4, vector<edge_t>{
                   {0, 1, 1},
                   {0, 2, 2},
                   {1, 3, 10},
                   {2, 3, 20},
               });
  ASSERT_EQ(4, g.numVertices());
  ASSERT_EQ(2, g.neighbours(0).size());
  ASSERT_EQ(2, g.neighbours(1).size());
  ASSERT_EQ(2, g.neighbours(2).size());
  ASSERT_EQ(2, g.neighbours(3).size());
}

int main(int argc, char** argv) {
  InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}