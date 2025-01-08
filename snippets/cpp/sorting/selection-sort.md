---
title: Selection Sort
description: Sorts an array using the selection sort algorithm.
tags: sorting, selection-sort
author: ashukr07
---

```cpp
void selection_sort(std::vector<int>& arr) {
    for (int i = 0; i < arr.size() - 1; ++i) {
        int min_idx = i;
        for (int j = i + 1; j < arr.size(); ++j) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        std::swap(arr[i], arr[min_idx]);
    }
}

// Usage:
std::vector<int> nums = {64, 25, 12, 22, 11};
selection_sort(nums); // nums becomes: {11, 12, 22, 25, 64}
```