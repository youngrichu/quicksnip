---
title: Split String
description: Splits a string by a delimiter
author: saminjay
tags: string,split,c++23
---

```cpp
#include <string>
#include <vector>

std::vector<std::string> split_string(std::string str, std::string delim) {
    std::vector<std::string> splits;
    int i = 0, j;
    int inc = delim.length();
    while (j != std::string::npos) {
        j = str.find(delim, i);
        splits.push_back(str.substr(i, j - i));
        i = j + inc;
    }
    return splits;
}
```
