---
title: Hex to RGB Color
description: Converts hexadecimal color code to RGB color values.
author: pvictordev
tags: color,conversion
---

```js
function hexToRgb(r, g, b) {
    return (
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
},

// Usage:
console.log(hexToRgb("#ff5733")); // { r: 255, g: 87, b: 51 }
console.log(hexToRgb("#ffff")); // { r: 0, g: 255, b: 255 }
```