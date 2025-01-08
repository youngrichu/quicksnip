---
title: LCM
description: Computes the least common multiple (LCM) of two integers.
tags: math, lcm
author: ashukr07
---

```cpp
int lcm(int a, int b) {
    return (a / gcd(a, b)) * b; // Using GCD to calculate LCM
}

// Usage:
lcm(12, 18); // Returns: 36
```