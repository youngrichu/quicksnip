---
title: Calculate Factiorial of a number
description: Calculates factorial of a given number using recursive function
author: SamratBarai
tags: math,factorial,recursive-function
---

```py
def factorial(n):
    if n < 0: return "Exception: Cannot calculate factorial for negative numbers" # Handling negative number
    elif n == 0 or n == 1: return 1 # Returns 1 if n is 0 or 1
    else: return n * factorial(n-1) # Recall the factorial function
```

# Usage:
print(factorial(4)) # Returns 24
print(factorial(-3)) # Returns Exception
