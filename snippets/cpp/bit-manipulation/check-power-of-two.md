---
title: Check if a Number is Power of Two
description: Checks if a given number is a power of two using bitwise operations.
tags: bit-manipulation, power-of-two
author: ashukr07
---

```cpp
bool is_power_of_two(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}

// Usage:
is_power_of_two(16); // Returns: true
is_power_of_two(18); // Returns: false
```