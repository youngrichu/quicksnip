---
title: Swap numbers
description: Swaps two numbers without using third variable
author: Emosans
tags: swap,numbers
---

```cpp
#include<tuple>
std::tuple<int,int> swap(int num1,int num2){
    num1=num1+num2;
    num2=num1-num2;
    num1=num1-num2;
    return std::make_tuple(num1,num2);
}

// Usage
auto swapped=swap(3,4); // Returns a tuple (access the values using std::get<0>(swapped)/std::get<1>(swapped))
```