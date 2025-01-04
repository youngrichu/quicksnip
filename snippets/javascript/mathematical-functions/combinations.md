---
title: Combinations
description: Calculates the number of combinations (denoted as C(n,r) or "n choose r"), which determines how many ways you can select r items from n items without considering the order.
author: JanluOfficial
tags: math,number-theory,algebra
---

```js
function combinations(n, r) {
    function factorial(x) {
        if (x === 0 || x === 1) return 1;
        let result = 1;
        for (let i = 2; i <= x; i++) {
            result *= i;
        }
        return result;
    }
    return factorial(n) / (factorial(r) * factorial(n - r));
}

// Usage:
combinations(12,24); // Returns:    7.720248753351544e-16
combinations(1,22);  // Returns:    8.896791392450574e-22
```