---
title: RGB to HSL Color
description: Converts RGB color values to HSL color values.
author: pvictordev
tags: color,conversion
---

```js
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h, s, l;
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

// Usage:
console.log(rgbToHsl(255, 87, 51)); // { h: 14, s: 100, l: 60 }
console.log(rgbToHsl(255, 255, 255)); // { h: 0, s: 0, l: 100 }
``` 