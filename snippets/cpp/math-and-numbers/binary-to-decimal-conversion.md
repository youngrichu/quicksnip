---
title: Binary to Decimal Conversion
description: Converts a binary number represented as a string to its decimal equivalent.
tags: binary, conversion
author: ashukr07
---

```cpp
int binary_to_decimal(const std::string& binary) {
    int decimal = 0;
    int base = 1; // Base value for the least significant bit

    for (int i = binary.length() - 1; i >= 0; --i) {
        if (binary[i] == '1') {
            decimal += base;
        }
        base *= 2; // Move to the next power of 2
    }
    return decimal;
}

// Usage:
std::string binary = "1011"; // Binary representation of 11
binary_to_decimal(binary);   // Returns: 11
```