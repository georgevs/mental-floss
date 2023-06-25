#pragma once

#include <ostream>
#include <vector>

namespace std {

template <typename T>
ostream& operator<<(ostream& os, const vector<T>& values) {
  ostringstream oss;
  copy(begin(values), end(values), ostream_iterator<T>(oss, ","));
  os << "[" << oss.str() << "]";
  return os;
}

}  // namespace std
