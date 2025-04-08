---
title: Grid layout
description: Equal sized items in a responsive grid
author: xshubhamg
contributors: tryoxiss
tags: layout,grid
---

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
/* Explanation:
- `auto-fit`: Automatically fits as many columns as possible within the container.
- `minmax(min(250px, 100%), 1fr)`: Defines a minimum column size of 250px and a maximum size of 1fr (fraction of available space). However, that minimum column size is allowed to shrink to fit all avalible space if the space is otherwise less than the minimum.
  - NOTE: the `min(x, 100%)` trick does not do much for very small sizes like 250px, but it will help massively if you increase the min column size yourself.
*/
}
```
