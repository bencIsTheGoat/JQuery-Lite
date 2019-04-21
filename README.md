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

#### DOMNodeCollection methods

* The append method below is able to accept either a JQuery Lite wrapped collection, an HTML element or a string
* Appends the outerHTML to the innerHTML of each element in the DOMNodeCollection

```javascript
append(ele) {
        if (typeof ele === 'string' || ele instanceof HTMLElement) {
             for (let i = 0; i < this.arr.length; i++) {
                 this.arr[i].append(ele);
             }
        } else if (ele instanceof DOMNodeCollection) {
             for (let i = 0; i < this.arr.length; i++) {
                 for (let j = 0; j < ele.arr.length; j++) {
                     this.arr[i].append(ele.arr[j]);
                 }
             }
         }
    }
```

