---
title: Linear Search
description: Searches for a target value in an array using linear search.
tags: searching, linear-search
author: ashukr07
---

```cpp
int linear_search(const std::vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); ++i) {
        if (arr[i] == target) return i; // Return index if found
    }
    return -1; // Element not found
}

// Usage:
std::vector<int> nums = {4, 2, 8, 5, 1};
linear_search(nums, 5); // Returns: 3 (index of element)
linear_search(nums, 10); // Returns: -1 (not found)
```