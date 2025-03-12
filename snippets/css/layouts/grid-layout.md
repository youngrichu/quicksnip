---
title: Grid layout
description: Equal sized items in a responsive grid
author: xshubhamg
contributors: tryoxiss
tags: layout,grid
---

```css
.grid-container {
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
/* Explanation:
- `auto-fit`: Automatically fits as many columns as possible within the container.
- `minmax(250px, 1fr)`: Defines a minimum column size of 250px and a maximum size of 1fr (fraction of available space).
*/
}
```
