---
title: Fibonacci Sequence
description: Calculates the nth Fibonacci number using recursion.
tags: math, fibonacci, recursion
author: ashukr07
---

```cpp
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Usage:
fibonacci(6); // Returns: 8
```