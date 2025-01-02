---
title: Hello, World!
description: Converts a GUID to a byte array.
author: chaitanya-jvnm
tags: c#,guid,byte-array,utility
---

```c#
public static byte[] GuidToByteArray(string guid) {
  return new Guid(guid).ToByteArray();
}
```