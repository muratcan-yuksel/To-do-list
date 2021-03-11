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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInput\": () => (/* binding */ getInput),\n/* harmony export */   \"addDivs\": () => (/* binding */ addDivs)\n/* harmony export */ });\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\n//Gets the user input (value) and exports it\nconst getInput = (() => {\n  const getTitle = () => {\n    return document.getElementById(\"title\").value;\n  };\n  const getDetails = () => {\n    return document.getElementById(\"details\").value;\n  };\n\n  const getDate = () => {\n    return document.getElementById(\"date\").value;\n  };\n\n  const getPriority = () => {\n    return document.querySelector('input[name=\"priority\"]:checked').value;\n  };\n\n  return { getTitle, getDetails, getDate, getPriority };\n})();\n//creates Divs and writes the user input into the DOM\nconst addDivs = () => {\n  //create a todo container\n  //the reason to do this is to be able to delete a singular to do element\n  const todoContainer = document.createElement(\"DIV\");\n  //give it a classname\n  todoContainer.setAttribute(\"class\", \"todoContainer\");\n  //append it to the container from index.js\n  (0,_index__WEBPACK_IMPORTED_MODULE_1__.container)().appendChild(todoContainer);\n  //Create elements\n  const checkBox = document.createElement(\"INPUT\");\n  const title = document.createElement(\"DIV\");\n  const details = document.createElement(\"DIV\");\n  const date = document.createElement(\"DIV\");\n  const priority = document.createElement(\"DIV\");\n  const deleteButton = document.createElement(\"BUTTON\");\n  // set their attributes for identification and append them to the todo container Div\n  checkBox.setAttribute(\"type\", \"checkbox\");\n  checkBox.setAttribute(\"class\", \"todoCheck\");\n  todoContainer.appendChild(checkBox);\n\n  title.textContent = getInput.getTitle();\n  title.setAttribute(\"class\", \"todoTitle\");\n  todoContainer.appendChild(title);\n\n  details.textContent = getInput.getDetails();\n  details.setAttribute(\"class\", \"todoDetails\");\n  todoContainer.appendChild(details);\n\n  date.innerHTML = getInput.getDate();\n  date.setAttribute(\"class\", \"todoDate\");\n  todoContainer.appendChild(date);\n\n  priority.innerHTML = getInput.getPriority();\n  priority.setAttribute(\"class\", \"todoPriority\");\n  todoContainer.appendChild(priority);\n\n  deleteButton.textContent = \"DELETE\";\n  deleteButton.setAttribute(\"class\", \"todoDelete\");\n  todoContainer.appendChild(deleteButton);\n  //the answer is todoContainer\n  console.log(deleteButton.parentNode);\n};\n\n\n\n\n//# sourceURL=webpack://To-do-list/./src/createDOM.js?");

/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo),\n/* harmony export */   \"newTodo\": () => (/* binding */ newTodo)\n/* harmony export */ });\n/* harmony import */ var _createDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDOM */ \"./src/createDOM.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n//Todo class\nclass Todo {\n  constructor(title, date, priority, details) {\n    this.title = title;\n    this.date = date;\n    this.priority = priority;\n    this.details = details;\n  }\n}\n//Creates a new todo upon function calling\nconst newTodo = (() => {\n  //create new todo\n  const createTodo = () => {\n    const todo = new Todo();\n    //todo takes its values from  the user input taken at createDOM\n    todo.title = _createDOM__WEBPACK_IMPORTED_MODULE_0__.getInput.getTitle();\n    todo.details = _createDOM__WEBPACK_IMPORTED_MODULE_0__.getInput.getDetails();\n    todo.date = _createDOM__WEBPACK_IMPORTED_MODULE_0__.getInput.getDate();\n    todo.priority = _createDOM__WEBPACK_IMPORTED_MODULE_0__.getInput.getPriority();\n\n    console.log(todo);\n    //push the new todo into the Todolist array from the index.js file\n    _index__WEBPACK_IMPORTED_MODULE_1__.TodoList.push(todo);\n    console.log(_index__WEBPACK_IMPORTED_MODULE_1__.TodoList);\n    return;\n  };\n\n  return { createTodo };\n})();\n\n\n\n\n//# sourceURL=webpack://To-do-list/./src/createTodo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"container\": () => (/* binding */ container),\n/* harmony export */   \"TodoList\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n/* harmony import */ var _createDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDOM */ \"./src/createDOM.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n\n\n\n\n//calls the modal logic from modal.js\n(0,_modal__WEBPACK_IMPORTED_MODULE_2__.modalShortCut)();\n\n//an array that holds the to-dos\nconst TodoList = [\n  {\n    title: \"first to-do\",\n    date: \"sometime\",\n    priority: \"chill\",\n    details: \"It's about something\",\n  },\n];\n//container Div\nconst container = () => {\n  return document.querySelector(\".container\");\n};\n\nconst button = document.querySelector(\".button\");\n\nbutton.addEventListener(\"click\", function () {\n  _createTodo__WEBPACK_IMPORTED_MODULE_0__.newTodo.createTodo();\n\n  (0,_createDOM__WEBPACK_IMPORTED_MODULE_1__.addDivs)();\n});\n\n\n\n\n//# sourceURL=webpack://To-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal),\n/* harmony export */   \"modalShortCut\": () => (/* binding */ modalShortCut)\n/* harmony export */ });\nconst modal = (() => {\n  // Get the modal\n  var modal = document.getElementById(\"myModal\");\n\n  // Get the button that opens the modal\n  var btn = document.getElementById(\"myBtn\");\n\n  // Get the <span> element that closes the modal\n  var span = document.getElementsByClassName(\"close\")[0];\n\n  // When the user clicks the button, open the modal\n  const btnClick = () => {\n    btn.onclick = function () {\n      modal.style.display = \"block\";\n    };\n  };\n\n  // When the user clicks on <span> (x), close the modal\n  const spanClick = () => {\n    span.onclick = function () {\n      modal.style.display = \"none\";\n    };\n  };\n\n  // When the user clicks anywhere outside of the modal, close it\n  const windowClick = () => {\n    window.onclick = function (event) {\n      if (event.target == modal) {\n        modal.style.display = \"none\";\n      }\n    };\n  };\n\n  return { btnClick, spanClick, windowClick };\n})();\n//this is the shortcut function that'll be called in index.js\nconst modalShortCut = () => {\n  modal.btnClick();\n  modal.spanClick();\n  modal.windowClick();\n};\n\n\n\n\n//# sourceURL=webpack://To-do-list/./src/modal.js?");

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