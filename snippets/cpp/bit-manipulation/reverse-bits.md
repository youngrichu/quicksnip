---
title: Reverse Bits
description: Reverses the bits of a given integer.
tags: bit-manipulation, reverse-bits
author: ashukr07
---

```cpp
unsigned int reverse_bits(unsigned int n) {
    unsigned int result = 0;
    for (int i = 0; i < 32; ++i) {
        result <<= 1;
        result |= n & 1;
        n >>= 1;
    }
    return result;
}

// Usage:
reverse_bits(43261596); // Returns: 964176192 (Binary: 00000010100101000001111010011100 -> 00111001011110000010100101000000)
```