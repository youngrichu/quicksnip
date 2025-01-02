---
title: std::vector Print Utility
description: Overloads the << operator to print the contents of a vector just like in python.
author: Mohamed-faaris
tags: cpp,printing,vector,utility
---

```cpp
#include <iostream> // Includes the input/output stream library
#include <vector>   // Includes the vector container

template <typename T>
std::ostream& operator<<(std::ostream& os, const std::vector<T>& vec) {
    os << "["; // Begin vector formatting with an opening bracket
    for (size_t i = 0; i < vec.size(); ++i) {
        os << vec[i]; // Print each vector element
        if (i != vec.size() - 1) {
            os << ", "; // Add separator between elements except after the last one
        }
    }
    os << "]"; // Close vector formatting with a closing bracket
    return os; // Return the stream to enable chaining
}
```
