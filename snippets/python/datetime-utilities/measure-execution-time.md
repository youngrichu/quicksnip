---
title: Measure Execution Time
description: Measures the execution time of a code block.
author: technoph1le
tags: time,execution
---

```py
import time

def measure_time(func, *args):
    start = time.time()
    result = func(*args)
    end = time.time()
    print(f'Execution time: {end - start:.6f} seconds')
    return result

# Usage:
def slow_function():
    time.sleep(2)

measure_time(slow_function) # Outputs an execution time of ~2s
```
