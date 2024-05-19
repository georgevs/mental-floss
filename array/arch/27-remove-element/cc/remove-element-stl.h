#pragma once

#include <algorithm>
#include <vector>
#include <functional>

using namespace std;

namespace remove_element_stl {

class Solution {
public:
  int removeElement(vector<int>& xs, int val) {
    // return remove_if(begin(xs), end(xs), [val](auto it) { return it == val; }) - begin(xs);
    // return remove_if(begin(xs), end(xs), bind(equal_to<int>{}, placeholders::_1, val)) - begin(xs);
    // return remove_if(begin(xs), end(xs), bind_front(equal_to<int>{}, val)) - begin(xs);
    // return remove(begin(xs), end(xs), val) - begin(xs);
    return xs.size() - ranges::remove(xs, val).size();
  }
};

} // namespace S1

