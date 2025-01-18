---
title: Count Vowels
description: Counts the vowels (a, e, i, o, u) in a string
author: Mcbencrafter
tags: string,vowels,counter
---

```java
public static int countVowels(String text) {
    String vowels = "aeiou";
    int count = 0;

    for (char character : text.toLowerCase().toCharArray()) {
        if (vowels.indexOf(character) == -1)
            continue;
        
        count++;
    }

    return count;
}

// Usage:
System.out.println(countVowels("hello world")); // 3
```