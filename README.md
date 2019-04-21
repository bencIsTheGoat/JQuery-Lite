# JQuery Lite

### Overview

Extensive frontend-heavy project that mimics the functionality of JQuery, a JavaScript library

### Features

* This is the method that grabs the selected HTML element from the DOM and instantiates the element so that JQuery Lite methods can be utilized

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

