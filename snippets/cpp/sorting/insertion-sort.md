---
title: Insertion Sort
description: Sorts an array using the insertion sort algorithm.
tags: sorting, insertion-sort
author: ashukr07
---

```cpp
void insertion_sort(std::vector<int>& arr) {
    for (int i = 1; i < arr.size(); ++i) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            --j;
        }
        arr[j + 1] = key;
    }
}

// Usage:
std::vector<int> nums = {12, 11, 13, 5, 6};
insertion_sort(nums); // nums becomes: {5, 6, 11, 12, 13}
```