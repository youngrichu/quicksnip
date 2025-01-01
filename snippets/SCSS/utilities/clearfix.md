---
Title: Clearfix
Description: Provides a clearfix utility for floating elements.
Author: dostonnabotov
Tags: scss,clearfix,utility,css
---

```
@mixin clearfix {
  &::after {
    content: '';
    display: block;
    clear: both;
  }
}
```
