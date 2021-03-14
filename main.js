/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createDOM.js":
/*!**************************!*\
  !*** ./src/createDOM.js ***!
  \**************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Identifier 'index' has already been declared (219:18)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\n|               // console.log(\\\"new thing \\\" + projectArray[project]);\\n>               let index = projectArray[project].findIndex(\\n|                 (obj) =>\\n|                   obj.title === projectArray[project][i].title.textContent &&\");\n\n//# sourceURL=webpack://To-do-list/./src/createDOM.js?");

/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo),\n/* harmony export */   \"newTodo\": () => (/* binding */ newTodo)\n/* harmony export */ });\n/* harmony import */ var _createDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDOM */ \"./src/createDOM.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n//Todo class\nclass Todo {\n  constructor(title, date, priority, details, project) {\n    this.title = title;\n    this.date = date;\n    this.priority = priority;\n    this.details = details;\n    this.project = project;\n  }\n}\n//Creates a new todo upon function calling\nconst newTodo = (() => {\n  //create new todo\n  const createTodo = () => {\n    const todo = new Todo();\n    //todo takes its values from  the user input taken at createDOM\n    todo.title = _createDOM__WEBPACK_IMPORTED_MODULE_0__.getInput.getTitle();\n    todo.details = _createDOM__WEBPACK_IMPORTED_MODULE_0__.getInput.getDetails();\n    todo.date = _createDOM__WEBPACK_IMPORTED_MODULE_0__.getInput.getDate();\n    todo.priority = _createDOM__WEBPACK_IMPORTED_MODULE_0__.getInput.getPriority();\n    todo.project = _createDOM__WEBPACK_IMPORTED_MODULE_0__.getInput.getDropDown();\n    //the following function does this:\n    //it loops through the projectArray object\n    //checks if the created todo shares its project name with any of the items in the object\n    //if that's the case, pushes the todo into THAT project array into the projectArray object\n    for (let project in _index__WEBPACK_IMPORTED_MODULE_1__.projectArray) {\n      if (project === todo.project) {\n        // console.log(projectArray[project]);\n        _index__WEBPACK_IMPORTED_MODULE_1__.projectArray[project].push(todo);\n        // console.log(\"this is the last one \" + projectArray[project]);\n      }\n    }\n\n    console.log(todo);\n    //push the new todo into the Todolist array from the index.js file\n    _index__WEBPACK_IMPORTED_MODULE_1__.TodoList.push(todo);\n    console.log(_index__WEBPACK_IMPORTED_MODULE_1__.TodoList);\n    return;\n  };\n\n  return { createTodo };\n})();\n\n\n\n\n//# sourceURL=webpack://To-do-list/./src/createTodo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"container\": () => (/* binding */ container),\n/* harmony export */   \"TodoList\": () => (/* binding */ TodoList),\n/* harmony export */   \"projectArray\": () => (/* binding */ projectArray)\n/* harmony export */ });\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n/* harmony import */ var _createDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDOM */ \"./src/createDOM.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n\n\n\n\n//calls the modal logic from modal.js\n(0,_modal__WEBPACK_IMPORTED_MODULE_2__.modalShortCut)();\n\n(0,_modal__WEBPACK_IMPORTED_MODULE_2__.projectModalShortCut)();\n//an array that holds the to-dos\nconst TodoList = [\n  {\n    title: \"first to-do\",\n    date: \"sometime\",\n    priority: \"chill\",\n    details: \"It's about something\",\n  },\n];\n//object that contains all the project arrays\n//I'll use this object to display all the saved projects later on\nconst projectArray = {};\n\n//container Div\nconst container = () => {\n  return document.querySelector(\".container\");\n};\n\nconst button = document.querySelector(\".addTodo\");\n//function that starts the to-do adding process\nbutton.addEventListener(\"click\", function () {\n  _createTodo__WEBPACK_IMPORTED_MODULE_0__.newTodo.createTodo();\n  console.log(TodoList);\n  (0,_createDOM__WEBPACK_IMPORTED_MODULE_1__.addDivs)();\n  _modal__WEBPACK_IMPORTED_MODULE_2__.modal.modal2().style.display = \"none\";\n  console.log(projectArray);\n});\n\nconst projectButton = document.querySelector(\".addProject\");\nprojectButton.addEventListener(\"click\", function () {\n  _modal__WEBPACK_IMPORTED_MODULE_2__.addProject.modal2().style.display = \"none\";\n});\n\n(0,_createDOM__WEBPACK_IMPORTED_MODULE_1__.addDivsForProjects)();\n\n\n\n\n//# sourceURL=webpack://To-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal),\n/* harmony export */   \"modalShortCut\": () => (/* binding */ modalShortCut),\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"projectModalShortCut\": () => (/* binding */ projectModalShortCut)\n/* harmony export */ });\n//Function that adds individual To-dos\nconst modal = (() => {\n  // Get the modal\n  var modal = document.getElementById(\"myModal\");\n  //this will be used in index js directly to close the window on to do add\n  var modal2 = () => {\n    return document.getElementById(\"myModal\");\n  };\n\n  // Get the button that opens the modal\n  var btn = document.getElementById(\"myBtn\");\n\n  // Get the <span> element that closes the modal\n  var span = document.getElementsByClassName(\"close\")[0];\n\n  // When the user clicks the button, open the modal\n  const btnClick = () => {\n    btn.onclick = function () {\n      modal.style.display = \"block\";\n    };\n  };\n\n  // When the user clicks on <span> (x), close the modal\n  const spanClick = () => {\n    span.onclick = function () {\n      modal.style.display = \"none\";\n    };\n  };\n\n  // When the user clicks anywhere outside of the modal, close it\n  const windowClick = () => {\n    window.onclick = function (event) {\n      if (event.target == modal) {\n        modal.style.display = \"none\";\n      }\n    };\n  };\n\n  return { btnClick, spanClick, windowClick, modal2 };\n})();\n//this is the shortcut function that'll be called in index.js\nconst modalShortCut = () => {\n  modal.btnClick();\n  modal.spanClick();\n  modal.windowClick();\n};\n\n//function that adds project\nconst addProject = (() => {\n  const btn = document.getElementById(\"projectButton\");\n  // Get the modal\n  var modal = document.getElementById(\"myModal2\");\n  //this will be used in index js directly to close the window on to do add\n  var modal2 = () => {\n    return document.getElementById(\"myModal2\");\n  };\n\n  // Get the <span> element that closes the modal\n  var span = document.getElementsByClassName(\"close2\")[0];\n\n  // When the user clicks the button, open the modal\n  const btnClick = () => {\n    btn.onclick = function () {\n      modal.style.display = \"block\";\n    };\n  };\n\n  // When the user clicks on <span> (x), close the modal\n  const spanClick = () => {\n    span.onclick = function () {\n      modal.style.display = \"none\";\n    };\n  };\n\n  return { btnClick, spanClick, modal2 };\n})();\n\nconst projectModalShortCut = () => {\n  addProject.btnClick();\n  addProject.spanClick();\n};\n\n\n\n\n//# sourceURL=webpack://To-do-list/./src/modal.js?");

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