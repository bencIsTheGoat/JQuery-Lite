# JQuery Lite

### Overview

Extensive frontend-heavy project that mimics the functionality of JQuery, a JavaScript library

### Features

```javascript
window.$l = function (arg) {
    let arr;
    if (typeof arg === "string") {
        arr = Array.from(document.querySelectorAll(arg));
    } else if (arg instanceof HTMLElement) {
        arr = [arg];
    }
    return new DOMNodeCollection (arr);
};
```

