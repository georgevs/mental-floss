# C++

## Build and run
```bash
g++ -std=c++20 -o ./bin/test test.cc -lgtest && ./bin/test
```

## Install gtest
```bash
sudo apt install libgtest-dev  
```

## Check lib symbols
```bash
nm --demangle  /usr/lib/x86_64-linux-gnu/libgtest.a | grep 'testing::InitGoogleTest'
```
