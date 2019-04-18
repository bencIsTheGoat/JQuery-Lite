class DOMNodeCollection {
    constructor (arr) {
        this.arr = arr;
    }

    html(string) {
        if (string === undefined) {
            return this.arr[0].innerHTML;
        } else {
            for (let i = 0; i < this.arr.length; i++) {
                this.arr[i].innerHTML = string;
            }
        }
    }

    empty() {
        this.html("");
    }

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

    attr(string) {
        return this.arr[0].attributes[`${string}`].value;
    }

    addClass(className) {
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i].classList.add(className);
        }
    }

    removeClass(className) {
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i].classList.remove(className);
        }
    }

    children() {
        let arr = [];
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 0; j < this.arr[i].children.length; j++) {
                arr.push(this.arr[i].children[j]);
            }
        }
        return new DOMNodeCollection(arr);
    }

    parent() {
        let arr = [];
        for (let i = 0; i < this.arr.length; i++) {
            arr.push(this.arr[i].parentElement);
        }
        return new DOMNodeCollection(arr);
    }

    find(selector) { 
        let arr = [];
        for (let i = 0; i < this.arr.length; ++i) {
            const nodes = this.arr[i].querySelectorAll(selector);
            arr = arr.concat(Array.from(nodes));
        }
        return new DOMNodeCollection(arr);
    }

    remove(selector) {
        const selected = this.find(selector);
        for (let i = 0; i < selected.arr.length; i++) {
            selected.arr[i].remove();
        }
    }

    on(event, callback) {
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i].addEventListener(event, callback);
            const key = `jqueryEvents-${event}`;
            if (this.arr[i][key] === undefined) {
                this.arr[i][key] = [];
            }
            this.arr[i][key].push(callback);
        }
    }

    off(event) {
        for (let i = 0; i < this.arr.length; i++) {
            const key = `jqueryEvents-${event}`;
            let eventAttr = this.arr[i][key];
            if (eventAttr) {
                for (let j = 0; j < eventAttr.length; j++) {
                    this.arr[i].removeEventListener(event, eventAttr[j])
                };
            }
            eventAttr = [];
        };
    }
}


module.exports = DOMNodeCollection;