---
title: Swap numbers
description: Swaps two numbers without using third variable
author: Emosans
tags: swap,numbers
---

```c
#include<stdio.h>
void swap(int* num1,int* num2){
    *num1= *num1 + *num2;
    *num2= *num1 - *num2;
    *num1= *num1 - *num2;
}

// Usage:
int a=3,b=4;
auto swapped=swap(&a,&b); // simply use printf after this to print swapped values
```