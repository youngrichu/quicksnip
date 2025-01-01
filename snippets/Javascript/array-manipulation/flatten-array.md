---
Title: Flatten Array
Description: Flattens a multi-dimensional array.
Author: dostonnabotov
Tags: javascript,array,flatten,utility
---

```
const flattenArray = (arr) => arr.flat(Infinity);

// Usage:
const nestedArray = [1, [2, [3, [4]]]];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4]
```
