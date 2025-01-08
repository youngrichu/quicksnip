---
title: Calculate GCD
description: Computes the greatest common divisor (GCD) of two integers.
tags: math, gcd
author: ashukr07
---

```cpp
int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}

// Usage:
gcd(48, 18); // Returns: 6
```