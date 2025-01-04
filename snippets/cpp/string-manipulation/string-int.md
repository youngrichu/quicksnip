---
title: String Int
description: Converts string to int without built in stoi()
author: Emosans
tags: string,int
---

```cpp
std::int to_num(const std::string& input){
    int num=0;
    int len=input.size();
    for(int i=0;i<len;i++){
        num=num*10+(input[i]-'0');
    }
    return num;
}

// Usage
to_num("123"); // Returns 123(type->int)
```