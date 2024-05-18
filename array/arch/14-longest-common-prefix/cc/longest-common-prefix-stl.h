
#include <string>
#include <vector>
#include <numeric>

using namespace std;

namespace longest_common_prefix_stl {


class Solution {
 public:
  template<class T>
  auto longestCommonPrefix(const vector<T>& xs) -> T {
    if (xs.empty()) {
      return T {};
    }
    return accumulate(
      xs.cbegin() + 1, xs.cend(), 
      xs.front(), 
      [] (const auto& lhs, const auto& rhs) { 
        return T {
          lhs.begin(), 
          mismatch(lhs.begin(), lhs.end(), 
                   rhs.begin(), rhs.end()).first
        };
      }
    );
  }
};



// class Solution {
//  public:
//   string longestCommonPrefix(const vector<string>& strs) {
//     if (strs.empty()) {
//       return "";
//     }

//     auto lcp = [](const string& s1, const string& s2) {
//       string r;
//       auto ri = back_inserter(r);

//       for (auto i1 = s1.begin(), i2 = s2.begin();
//            i1 != s1.end() && i2 != s2.end() && *i1 == *i2; 
//            ++i1, ++i2, ++ri) {
//         *ri = *i1;
//       }
//       return r;
//     };
//     return accumulate(strs.begin() + 1, strs.end(), strs.front(), lcp);
//   }
// };

}  // namespace longest_common_prefix_stl
