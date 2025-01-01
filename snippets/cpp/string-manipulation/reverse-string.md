---
Title: Reverse String
Description: Reverses the characters in a string.
Author: Vaibhav-kesarwani
Tags: cpp,array,reverse,utility
---

```
#include <string>
#include <algorithm>

std::string reverseString(const std::string& input) {
    std::string reversed = input;
    std::reverse(reversed.begin(), reversed.end());
    return reversed;
}
```
