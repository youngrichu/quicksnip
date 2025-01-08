---
title: Reverse list
description: Reverses the contents of an list
author: Mcbencrafter
tags: list,reverse
---

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public static <T> List<T> reverseList(List<T> list) {
    List<T> reversedList = new ArrayList<>(list);
    Collections.reverse(reversedList);
    return reversedList;
}

// Usage:
List<Integer> list = List.of(1, 3, 5, 7, 5);
List<Integer> result = reverseList(lst);
System.out.println("List reversed: " + result); // [5, 7, 5, 3, 1]
```