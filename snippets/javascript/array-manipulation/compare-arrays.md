---
title: Compare Arrays
description: Compares two arrays to check if they are equal.
author: KCSquid
tags: array,compare,equal
---

```js
const compareArrays = (array1, array2) => {
  if (
    !Array.isArray(array1) || !Array.isArray(array2) ||
    array1.length !== array2.length
  ) return false;

  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!compareArrays(array1[i], array2[i])) return false;
    } else if (typeof array1[i] === "object" && typeof array2[i] === "object") {
      if (!compareObjects(array1[i], array2[i])) return false;
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const compareObjects = (obj1, obj2) => {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!compareArrays(val1, val2)) return false;
    } else if (typeof val1 === "object" && typeof val2 === "object") {
      if (!compareObjects(val1, val2)) return false;
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
};

// Usage:
const number = 123;
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];
const array3 = [[1, 2], [3, 4]];
const array4 = [[1, 2], [3, 4]];
const array5 = [{ a: 1, b: [{ c: 2 }] }, 3];
const array6 = [{ a: 1, b: [{ c: 2 }] }, 3];

compareArrays(array1, array2); // Returns: true
compareArrays(array3, array4); // Returns: true
compareArrays(array5, array6); // Returns: true
compareArrays(array1, number); // Returns: false
compareArrays(array3, array6); // Returns: false
```