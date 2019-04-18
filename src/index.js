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
    return new Promise ((resolve, reject) => {
        let defaults = {
            success: (res) => console.log(JSON.parse(res)),
            error: (res) => console.log(JSON.parse(res)),
            url: window.location,
            method: 'GET',
            data: {},
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    
        options = Object.assign({}, defaults, options);
        const xmlRequest = new XMLHttpRequest;
        xmlRequest.open(options['method'], options['url'], true);
    
        xmlRequest.onload = (e) => {
        }
    
        xmlRequest.send(JSON.stringify(options['data']))

        if (xmlRequest.status === 200) {
            resolve(xmlRequest.response)
        } else {
            reject('fail')
        }
    })

}
