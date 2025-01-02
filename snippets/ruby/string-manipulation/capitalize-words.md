---
title: Capitalize Words
description: Capitalizes the first letter of each word in a string.
author: ACR1209
tags: ruby,string,capitalize,words
---

```rb
def capitalize_words(str)
  str.split.map(&:capitalize).join(' ')
end

sentence = "ruby is awesome"
puts capitalize_words(sentence) # Output: "Ruby Is Awesome"
```
