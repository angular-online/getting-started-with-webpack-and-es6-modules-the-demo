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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_greeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/greeting */ \"./src/modules/greeting.js\");\n/* harmony import */ var _modules_math_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/math-functions */ \"./src/modules/math-functions.js\");\n/* harmony import */ var _modules_default_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/default-demo */ \"./src/modules/default-demo.js\");\n\r\n\r\n\r\nconst resultGreeting = document.getElementById('resultGreeting');\r\nconst resultSum = document.getElementById('resultSum');\r\nconst resultProduct = document.getElementById('resultProduct');\r\n\r\nconst a = 3;\r\nconst b = 7;\r\n\r\nresultGreeting.textContent = Object(_modules_greeting__WEBPACK_IMPORTED_MODULE_0__[\"sayHello\"])('Nice to see you!');\r\nresultSum.textContent = `The sum of ${a} and ${b} is ${Object(_modules_math_functions__WEBPACK_IMPORTED_MODULE_1__[\"sum\"])(a, b)}.`;\r\nresultProduct.textContent = `The product of ${a} and ${b} is ${Object(_modules_math_functions__WEBPACK_IMPORTED_MODULE_1__[\"product\"])(a, b)}.`;\r\n\r\n\r\n\r\nObject(_modules_default_demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modules/default-demo.js":
/*!*************************************!*\
  !*** ./src/modules/default-demo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n    console.log('default function called');\r\n});\r\n\r\n// export default class {} \n\n//# sourceURL=webpack:///./src/modules/default-demo.js?");

/***/ }),

/***/ "./src/modules/greeting.js":
/*!*********************************!*\
  !*** ./src/modules/greeting.js ***!
  \*********************************/
/*! exports provided: sayHello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sayHello\", function() { return sayHello; });\nconst sayHello = (greeting) => {\r\n    const currentHour = new Date().getHours();\r\n    let timeOfGreeting = 'Good morning!';\r\n\r\n    if (currentHour >= 12 && currentHour <= 17) {\r\n        timeOfGreeting = 'Good afternoon!';\r\n    } else if (currentHour >= 17) {\r\n        timeOfGreeting = 'Good evening!';\r\n    }\r\n\r\n    return `${timeOfGreeting} ${greeting}`;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/greeting.js?");

/***/ }),

/***/ "./src/modules/math-functions.js":
/*!***************************************!*\
  !*** ./src/modules/math-functions.js ***!
  \***************************************/
/*! exports provided: sum, product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return sum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"product\", function() { return product; });\nconst sum = (a, b) => {\r\n    return a + b;\r\n};\r\n\r\nconst product = (a, b) => {\r\n    return a * b;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/math-functions.js?");

/***/ })

/******/ });