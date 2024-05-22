# Leetcode

### Sample solution (cc,go,js,py)
[1584 min cost connect points](./graph/arch/1584-min-cost-connect-points)  

### Number of problems solved
```
find . -type d | perl -lne '/(\d+-[^\/]+)$/&&print $1' | uniq | wc -l
```
### Practice Lists
Blind 75: https://leetcode.com/list/oizxjoit  
Grind 169: https://leetcode.com/list/rabvlt31  
Grind 75: https://leetcode.com/list/rab78cw1  
Neetcode 150: https://leetcode.com/list/rr2ss0g5  
SQL 45: https://leetcode.com/list/o2qifkts  

### Push source subtree into GitHub
```
git subtree split -P leetcode -b github/leetcode
git push git@github.com:spamfro/leetcode.git github/leetcode:main
```

## CC

### Linux
Install gtest:
```bash
sudo apt install libgtest-dev  
```
Build and run:
```bash
g++ -std=c++20 -lgtest test.cc && ./a.out
```

### macOS
Install Google test and benchmark:
```bash
brew install googletest
brew install google-benchmark
```
Build and run:
```bash
export CPLUS_INCLUDE_PATH=/opt/homebrew/include
export LIBRARY_PATH=/opt/homebrew/lib
g++ -std=c++20 -lgtest test.cc && ./a.out
g++ -std=c++20 -lbenchmark bm.cc && ./a.out
```
