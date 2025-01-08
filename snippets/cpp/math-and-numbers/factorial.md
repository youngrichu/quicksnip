---
title: Factorial
description: Calculates the factorial of a given non-negative integer.
tags: math, factorial
author: ashukr07
---

```cpp
int factorial(int n) {
    if (n <= 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive step
}

// Usage:
factorial(5); // Returns: 120
```