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
Build Google test and benchmark:  
https://github.com/google/benchmark#installation  
```bash
sudo apt update
sudo apt install -y cmake git build-essential

sudo mkdir -p /usr/local/src/benchmark
sudo chown $(id -un):$(id -gn) /usr/local/src/benchmark
cd /usr/local/src

git clone https://github.com/google/benchmark.git benchmark
cd benchmark
cmake -E make_directory "build"
cmake -E chdir "build" cmake -DBENCHMARK_DOWNLOAD_DEPENDENCIES=on -DCMAKE_BUILD_TYPE=Release ../

cmake --build "build" --config Release

sudo cmake --build "build" --config Release --target install
tar -czC build lib | sudo tar -xzvC /usr/local
tar -czC build/third_party/googletest/src/googletest/include gtest | sudo tar -xzvC /usr/local/include
find /usr/local/lib -type f -name libbenchmark.a -or -name libgtest.a
find /usr/local/include -type f -name benchmark.h -or -name gtest.h
```

### macOS
Install Google test and benchmark:
```bash
brew install googletest
brew install google-benchmark
export CPLUS_INCLUDE_PATH=/opt/homebrew/include
export LIBRARY_PATH=/opt/homebrew/lib
```

### Build and run:
```bash
g++ -std=c++20 test.cc -lgtest && ./a.out
g++ -std=c++20 bm.cc -lbenchmark && ./a.out
```
