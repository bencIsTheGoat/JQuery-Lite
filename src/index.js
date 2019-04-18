const DOMNodeCollection = require('./dom_node_collection');

window.$l = function (arg) {
    let arr;
    // debugger
    if (typeof arg === "string") {
        arr = Array.from(document.querySelectorAll(arg));
    } else if (arg instanceof HTMLElement) {
        arr = [arg];
    }
    return new DOMNodeCollection (arr);
};