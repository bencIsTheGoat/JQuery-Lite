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

$l.extend = function(...objs) {
    let first = objs[0];
    for (let i = 1; i < objs.length; i++) {
        first = Object.assign({}, first, objs[i]);
    };
    return first;
}