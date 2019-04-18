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

$l.ajax = function(options) {
    let defaults = {
        success: (data) => console.log(`success... ${data}`),
        error: (request, errorMessage) => console.log(`${request} failed because ${errorMessage}`),
        url: window.location,
        method: 'GET',
        data: {},
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    options = Object.assign({}, defaults, options);
    const xmlRequest = new XMLHttpRequest;
    xmlRequest.open(options['method'], options['url']);
    xmlRequest.onload = () => {
        console.log(xmlRequest.status);
        console.log(xmlRequest.responseType);
        console.log(xmlRequest.response);
    }
    xmlRequest.send(defaults['data']);
}
