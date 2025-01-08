---
title: Quick Sort
description: Sorts an array using the quick sort algorithm.
tags: sorting, quick-sort
author: ashukr07
---

```cpp
void quick_sort(std::vector<int>& arr, int low, int high) {
    auto partition = [](std::vector<int>& arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; ++j) {
            if (arr[j] <= pivot) {
                std::swap(arr[++i], arr[j]);
            }
        }
        std::swap(arr[i + 1], arr[high]);
        return i + 1;
    };

    if (low < high) {
        int pi = partition(arr, low, high);
        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi + 1, high);
    }
}

// Usage:
std::vector<int> nums = {10, 7, 8, 9, 1, 5};
quick_sort(nums, 0, nums.size() - 1); // nums becomes: {1, 5, 7, 8, 9, 10}
```