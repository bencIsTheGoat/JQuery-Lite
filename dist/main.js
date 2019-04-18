/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n    constructor (arr) {\n        this.arr = arr;\n    }\n\n    html(string) {\n        if (string === undefined) {\n            return this.arr[0].innerHTML;\n        } else {\n            for (let i = 0; i < this.arr.length; i++) {\n                this.arr[i].innerHTML = string;\n            }\n        }\n    }\n\n    empty() {\n        this.html(\"\");\n    }\n\n    append(ele) {\n        if (typeof ele === 'string' || ele instanceof HTMLElement) {\n             for (let i = 0; i < this.arr.length; i++) {\n                 this.arr[i].append(ele);\n             }\n        } else if (ele instanceof DOMNodeCollection) {\n             for (let i = 0; i < this.arr.length; i++) {\n                 for (let j = 0; j < ele.arr.length; j++) {\n                     this.arr[i].append(ele.arr[j]);\n                 }\n             }\n         }\n    }\n\n    attr(string) {\n        return this.arr[0].attributes[`${string}`].value;\n    }\n\n    addClass(className) {\n        for (let i = 0; i < this.arr.length; i++) {\n            this.arr[i].classList.add(className);\n        }\n    }\n\n    removeClass(className) {\n        for (let i = 0; i < this.arr.length; i++) {\n            this.arr[i].classList.remove(className);\n        }\n    }\n\n    children() {\n        let arr = [];\n        for (let i = 0; i < this.arr.length; i++) {\n            for (let j = 0; j < this.arr[i].children.length; j++) {\n                arr.push(this.arr[i].children[j]);\n            }\n        }\n        return new DOMNodeCollection(arr);\n    }\n\n    parent() {\n        let arr = [];\n        for (let i = 0; i < this.arr.length; i++) {\n            arr.push(this.arr[i].parentElement);\n        }\n        return new DOMNodeCollection(arr);\n    }\n\n    find(selector) { \n        let arr = [];\n        for (let i = 0; i < this.arr.length; ++i) {\n            const nodes = this.arr[i].querySelectorAll(selector);\n            arr = arr.concat(Array.from(nodes));\n        }\n        return new DOMNodeCollection(arr);\n    }\n\n    remove(selector) {\n        const selected = this.find(selector);\n        for (let i = 0; i < selected.arr.length; i++) {\n            selected.arr[i].remove();\n        }\n    }\n\n    on(event, callback) {\n        for (let i = 0; i < this.arr.length; i++) {\n            this.arr[i].addEventListener(event, callback);\n            const key = `jqueryEvents-${event}`;\n            if (this.arr[i][key] === undefined) {\n                this.arr[i][key] = [];\n            }\n            this.arr[i][key].push(callback);\n        }\n    }\n\n    off(event) {\n        for (let i = 0; i < this.arr.length; i++) {\n            const key = `jqueryEvents-${event}`;\n            let eventAttr = this.arr[i][key];\n            if (eventAttr) {\n                for (let j = 0; j < eventAttr.length; j++) {\n                    this.arr[i].removeEventListener(event, eventAttr[j])\n                };\n            }\n            eventAttr = [];\n        };\n    }\n}\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nwindow.$l = function (arg) {\n    let arr;\n    // debugger\n    if (typeof arg === \"string\") {\n        arr = Array.from(document.querySelectorAll(arg));\n    } else if (arg instanceof HTMLElement) {\n        arr = [arg];\n    }\n    return new DOMNodeCollection (arr);\n};\n\n$l.extend = function(...objs) {\n    let first = objs[0];\n    for (let i = 1; i < objs.length; i++) {\n        first = Object.assign({}, first, objs[i]);\n    };\n    return first;\n}\n\n$l.ajax = function(options) {\n    let defaults = {\n        success: (data) => console.log(`success... ${data}`),\n        error: (request, errorMessage) => console.log(`${request} failed because ${errorMessage}`),\n        url: window.location,\n        method: 'GET',\n        data: {},\n        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'\n    }\n    options = Object.assign({}, defaults, options);\n    const xmlRequest = new XMLHttpRequest;\n    xmlRequest.open(options[method], options[url]);\n    xmlRequest.onload = () => {\n        console.log(xmlRequest.status);\n        console.log(xmlRequest.responseType);\n        console.log(xmlRequest.response);\n    }\n    xmlRequest.send(defaults[data]);\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });