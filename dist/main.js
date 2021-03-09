/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createDOM.js":
/*!**************************!*\
  !*** ./src/createDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInput\": () => (/* binding */ getInput),\n/* harmony export */   \"addDivs\": () => (/* binding */ addDivs)\n/* harmony export */ });\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nconst createDOM = (() => {\n  //get the container Div\n  const container = document.querySelector(\".container\");\n\n  const title = document.createElement(\"DIV\");\n  title.setAttribute(\"class\", \"title\");\n})();\n\n//Gets the user input (value) and exports it\nconst getInput = (() => {\n  const getTitle = () => {\n    return document.getElementById(\"title\").value;\n  };\n  const getDescription = () => {\n    return document.getElementById(\"description\").value;\n  };\n\n  return { getTitle, getDescription };\n})();\n\nconst addDivs = () => {\n  const title = document.createElement(\"DIV\");\n  const description = document.createElement(\"DIV\");\n\n  title.textContent = _createTodo__WEBPACK_IMPORTED_MODULE_0__.newTodo.getTitle();\n  (0,_index__WEBPACK_IMPORTED_MODULE_1__.container)().appendChild(title);\n  description.textContent = _createTodo__WEBPACK_IMPORTED_MODULE_0__.newTodo.getDescription();\n  (0,_index__WEBPACK_IMPORTED_MODULE_1__.container)().appendChild(description);\n};\n\n\n\n\n//# sourceURL=webpack://To-do-list/./src/createDOM.js?");

/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo),\n/* harmony export */   \"newTodo\": () => (/* binding */ newTodo)\n/* harmony export */ });\n/* harmony import */ var _createDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDOM */ \"./src/createDOM.js\");\n\n//Todo class\nclass Todo {\n  constructor(title, description, dueDate, priority, comments) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.comments = comments;\n  }\n}\n//Creates a new todo upon function calling\nconst newTodo = (() => {\n  //create new todo\n  const createTodo = () => {\n    const todo = new Todo();\n    console.log(todo);\n    return;\n  };\n  const getTitle = () => {\n    //gets the title from createDOM.js and appends it into the tod object\n    return _createDOM__WEBPACK_IMPORTED_MODULE_0__.getInput.getTitle();\n  };\n  //gets the description from createDOM.js and appends it into the tod object\n  const getDescription = () => {\n    return _createDOM__WEBPACK_IMPORTED_MODULE_0__.getInput.getDescription();\n  };\n  return { createTodo, getTitle, getDescription };\n})();\n\n\n\n\n//# sourceURL=webpack://To-do-list/./src/createTodo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"container\": () => (/* binding */ container)\n/* harmony export */ });\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n/* harmony import */ var _createDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDOM */ \"./src/createDOM.js\");\n\n\n\n//an array that holds the to-dos\nconst TodoList = [\n  {\n    title: \"first to-do\",\n    description: \"trying out\",\n    dueDate: \"sometime\",\n    priority: \"chill\",\n  },\n];\n\nconst container = () => {\n  return document.querySelector(\".container\");\n};\n// const todo = new Todo();\n// console.log(todo);\n// container.textContent = todo.title + \" \" + todo.description;\n\n//this is the core concept that I want to implement\nconst button = document.querySelector(\".button\");\nbutton.addEventListener(\"click\", function () {\n  // const getTitle = document.getElementById(\"title\").value;\n  // const getDescription = document.getElementById(\"description\").value;\n\n  //const getComments = document.getElementById(\"comments\").value;\n  //const todo = new Todo();\n  _createTodo__WEBPACK_IMPORTED_MODULE_0__.newTodo.createTodo();\n  // todo.title = getInput.getTitle();\n  // todo.description = getInput.getDescription();\n\n  // console.log(todo);\n\n  // const title = document.createElement(\"DIV\");\n  // const description = document.createElement(\"DIV\");\n\n  // title.textContent = newTodo.getTitle();\n  // container.appendChild(title);\n  // description.textContent = newTodo.getDescription();\n  // container.appendChild(description);\n\n  (0,_createDOM__WEBPACK_IMPORTED_MODULE_1__.addDivs)();\n});\n\n\n\n\n//# sourceURL=webpack://To-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;