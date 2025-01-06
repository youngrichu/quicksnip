---
title: Compare Arrays
description: Compares two arrays to check if they are equal.
author: KCSquid
tags: array,compare,equal
---

```js
const compareArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

// Usage:
array1 = [1, 2, 3, 4, 5];
array2 = [5, 4, 3, 2, 1];
compareArrays(array1, array2); // Returns: false
```