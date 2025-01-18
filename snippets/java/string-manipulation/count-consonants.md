---
title: Count Consonants
description: Counts the consonants (every character except for a, e, i, o, u) in a string
author: Mcbencrafter
tags: string,consonants,counter
---

```java
public static int countConsonants(String text) {
    String consonants = "bcdfghjklmnpqrstvwxyz";
    int count = 0;

    for (char character : text.toLowerCase().toCharArray()) {
        if (consonants.indexOf(character) == -1)
            continue;
            
        count++;
    }

    return count;
}

// Usage:
System.out.println(countConsonants("hello world")); // 7
```