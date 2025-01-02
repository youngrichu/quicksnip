---
title: Hello, World!
description: Makes the first letter of a string uppercase.
author: chaitanya-jvnm
tags: c#,string,capitalize,utility
---

```c#
/// <summary>
/// Capitalize the first character of the string
/// <summary>
public static string Capitalize(this string str) {
  return str.Substring(0, 1).ToUpper() + str.Substring(1);
}
```