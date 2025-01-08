---
title: Bubble Sort
description: Sorts an array using the bubble sort algorithm.
tags: sorting, bubble-sort
author: ashukr07
---

```cpp
void bubble_sort(std::vector<int>& arr) {
    for (int i = 0; i < arr.size() - 1; ++i) {
        for (int j = 0; j < arr.size() - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
            }
        }
    }
}

// Usage:
std::vector<int> nums = {5, 3, 8, 6, 2};
bubble_sort(nums); // nums becomes: {2, 3, 5, 6, 8}
```