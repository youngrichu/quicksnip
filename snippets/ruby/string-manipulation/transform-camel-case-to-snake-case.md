---
title: Transform Camel Case to Snake Case
description: Converts a Camel Case string to Snake case.
author: ACR1209
tags: string,convert,camel-case,snake-case
---

```rb
def camel_to_snake(str)
    str.gsub(/([A-Z])/, '_\1').downcase
end

# Usage
camel_case = "camelCaseToSnakeCase"
puts camel_to_snake(camel_case) # Output: "camel_case_to_snake_case"
```