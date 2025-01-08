---
title: Count Set Bits
description: Counts the number of 1 bits in the binary representation of a number.
tags: bit-manipulation, set-bits
author: ashukr07
---

```cpp
int count_set_bits(int n) {
    int count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}

// Usage:
count_set_bits(13); // Returns: 3 (Binary: 1101)
```