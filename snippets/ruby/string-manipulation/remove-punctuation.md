---
title: Remove Punctuation
description: Removes all punctuation from a given string.
author: ACR1209
tags: ruby,string,punctuation,remove
---

```rb
def remove_punctuation(str)
    str.gsub(/[[:punct:]]/, '')
end

text = "Hello, Ruby! How's it going?"
puts remove_punctuation(text) # Output: "Hello Ruby Hows it going"
```
