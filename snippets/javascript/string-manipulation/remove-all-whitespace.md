---
Title: Remove All Whitespace
Description: Removes all whitespace from a string.
Author: axorax
Tags: javascript,string,whitespace
---

```
function removeWhitespace(str) {
  return str.replace(/\s+/g, '');
}

// Example usage:
console.log(removeWhitespace('Hello world!')); // Output: 'Helloworld!'
```
