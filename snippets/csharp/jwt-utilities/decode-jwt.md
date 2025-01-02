---
title: Hello, World!
description: Decodes a JWT.
author: chaitanya-jvnm
tags: c#,jwt,decode,utility
---

```c#
public static string DecodeJwt(string token) {
  return new JwtSecurityTokenHandler().ReadJwtToken(token).ToString();
}
```