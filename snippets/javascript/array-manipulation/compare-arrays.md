---
title: Compare Arrays
description: Compares two arrays to check if they are equal.
author: KCSquid
tags: array,compare,equal
---

```js
const compareArrays = (array1, array2) => {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false;
  if (array1.length !== array2.length) return false;

  const traverse = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        if (!traverse(arr1[i], arr2[i])) return false;
      } else if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  }

  return traverse(array1, array2);
}

// Usage:
const number = 123;
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];
const array3 = [[1, 2], [3, 4]];
const array4 = [[1, 2], [3, 4]];

compareArrays(array1, array2); // Returns: true
compareArrays(array1, number); // Returns: false
compareArrays(array1, array4); // Returns: false
compareArrays(array3, array4); // Returns: true
```