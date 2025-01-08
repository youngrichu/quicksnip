---
title: Sort list
description: Sorts the contents of an numeric list
author: Mcbencrafter
tags: list,sorting,numberic,order,ascending,descending
---

```java
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public static <T extends Number & Comparable<T>> List<T> sortNumericList(List<T> list, boolean ascending) {
    return list.stream()
        .sorted(ascending ? Comparator.naturalOrder() : Comparator.reverseOrder())
        .collect(Collectors.toList());
}

// Usage:
List<Integer> list = List.of(5, 3, 1, 4, 2);
List<Integer> result = sortNumericList(list, true);
System.out.println("List sorted in ascending order: " + result); // [1, 2, 3, 4, 5]
result = sortNumericList(list, false);
System.out.println("List sorted in descending order: " + result); // [5, 4, 3, 2, 1]
```