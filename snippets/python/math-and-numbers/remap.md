---
title: Remap
description: re-maps a value from one range to another
author: JasimAlrawie
tags: math,number-theory,algebra
---

```py

def remap(value, start1, end1, start2, end2):
    return (value - start1) * (end2 - start2) / (end1 - start1) + start2
```

// Usage:
remap(value, 0, 1, 0, 255)    // remaps the value from (0,1) to (0,255)
remap(value, 0, PI*2, 0, 360) // remaps the value from rad to deg
remap(value, -1, 1, 1, 8)     // remaps the value from (-1,1) to (1,8)
```