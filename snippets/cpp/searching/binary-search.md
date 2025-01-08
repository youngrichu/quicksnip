---
title: Binary Search
description: Searches for a target value in a sorted array using binary search.
tags: searching, binary-search
author: ashukr07
---

```cpp
int binary_search(const std::vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2; // Avoids overflow
        if (arr[mid] == target) return mid;
        if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1; // Element not found
}

// Usage:
std::vector<int> nums = {1, 3, 5, 7, 9};
binary_search(nums, 7); // Returns: 3 (index of element)
binary_search(nums, 2); // Returns: -1 (not found)
```