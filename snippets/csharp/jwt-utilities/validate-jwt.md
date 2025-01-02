---
title: Hello, World!
description: Validates a JWT.
author: chaitanya-jvnm
tags: c#,jwt,validate,utility
---

```c#
public static bool ValidateJwt(string token, string secret) {
  var tokenHandler = new JwtSecurityTokenHandler();
  var validationParameters = new TokenValidationParameters {
    ValidateIssuerSigningKey = true,
    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secret)),
    ValidateIssuer = false,
    ValidateAudience = false
  };
  try {
    tokenHandler.ValidateToken(token, validationParameters, out _);
    return true;
  }
  catch {
    return false
  }
}
```