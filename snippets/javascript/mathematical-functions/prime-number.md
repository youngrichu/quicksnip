---
title: Prime Number
description: Calculates the number of combinations (denoted as C(n,r) or "n choose r"), which determines how many ways you can select r items from n items without considering the order.
author: JanluOfficial
tags: math,number-theory,algebra
---

```js
function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    if (num <= 3) return true;  // 2 and 3 are prime numbers
    if (num % 2 === 0 || num % 3 === 0) return false; // Exclude multiples of 2 and 3

    // Check divisors from 5 to √num, skipping multiples of 2 and 3
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Usage:
isPrime(69); // Returns:  false
isPrime(17); // Returns:  true
```