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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInput\": () => (/* binding */ getInput),\n/* harmony export */   \"addDivs\": () => (/* binding */ addDivs),\n/* harmony export */   \"addProjects\": () => (/* binding */ addProjects),\n/* harmony export */   \"addDivsForProjects\": () => (/* binding */ addDivsForProjects),\n/* harmony export */   \"addDropDown\": () => (/* binding */ addDropDown),\n/* harmony export */   \"displayHome\": () => (/* binding */ displayHome)\n/* harmony export */ });\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\n//Gets the user input (value) and exports it\nconst getInput = (() => {\n  const getTitle = () => {\n    return document.getElementById(\"title\").value;\n  };\n  const getDetails = () => {\n    return document.getElementById(\"details\").value;\n  };\n\n  const getDate = () => {\n    return document.getElementById(\"date\").value;\n  };\n\n  const getPriority = () => {\n    return document.querySelector('input[name=\"priority\"]:checked').value;\n  };\n  //get the input from project\n  const getProjectInput = () => {\n    return document.getElementById(\"projectAdd\").value;\n  };\n  //get the input from project drop down menu\n  const getDropDown = () => {\n    const input = document.getElementById(\"projectAddTodo\");\n    return input.options[input.selectedIndex].text;\n  };\n\n  return {\n    getTitle,\n    getDetails,\n    getDate,\n    getPriority,\n    getProjectInput,\n    getDropDown,\n  };\n})();\n\n//creates Divs and writes the user input into the DOM\nconst addDivs = () => {\n  //create a todo container\n  //the reason to do this is to be able to delete a singular to do element\n  const todoContainer = document.createElement(\"DIV\");\n  //give it a classname\n  todoContainer.setAttribute(\"class\", \"todoContainer\");\n  //append it to the container from index.js\n  (0,_index__WEBPACK_IMPORTED_MODULE_1__.container)().appendChild(todoContainer);\n  //Create elements\n  const checkBox = document.createElement(\"INPUT\");\n  const title = document.createElement(\"DIV\");\n  const details = document.createElement(\"DIV\");\n  const date = document.createElement(\"DIV\");\n  const priority = document.createElement(\"DIV\");\n  const deleteButton = document.createElement(\"BUTTON\");\n  // set their attributes for identification and append them to the todo container Div\n  checkBox.setAttribute(\"type\", \"checkbox\");\n  checkBox.setAttribute(\"class\", \"todoCheck\");\n  todoContainer.appendChild(checkBox);\n\n  title.textContent = getInput.getTitle();\n  title.setAttribute(\"class\", \"todoTitle\");\n  todoContainer.appendChild(title);\n\n  details.textContent = getInput.getDetails();\n  details.setAttribute(\"class\", \"todoDetails\");\n  todoContainer.appendChild(details);\n\n  date.innerHTML = getInput.getDate();\n  date.setAttribute(\"class\", \"todoDate\");\n  todoContainer.appendChild(date);\n\n  priority.innerHTML = getInput.getPriority();\n  priority.setAttribute(\"class\", \"todoPriority\");\n  todoContainer.appendChild(priority);\n\n  deleteButton.textContent = \"DELETE\";\n  deleteButton.setAttribute(\"class\", \"todoDelete\");\n  todoContainer.appendChild(deleteButton);\n  //a deleteing module to keep things just a bit tidier\n  const deleteModule = (() => {\n    //add an event listener to the delete button\n    //so that it can delete the todo from the DOM\n    deleteButton.addEventListener(\"click\", initRemoveButton, false);\n    //delete its parent element\n    function initRemoveButton() {\n      this.parentNode.parentNode.removeChild(this.parentNode);\n      console.log(_index__WEBPACK_IMPORTED_MODULE_1__.TodoList);\n      //the below function finds the deleted todo's index in the array, and removes it\n      // I couldn't think of a way to implement this in the creaTodo.js\n      let index = _index__WEBPACK_IMPORTED_MODULE_1__.TodoList.findIndex(\n        (obj) =>\n          obj.title === title.textContent && obj.details === details.textContent\n      );\n      //remove that index\n      _index__WEBPACK_IMPORTED_MODULE_1__.TodoList.splice(index, 1);\n\n      //this function deletes the same element from the created array in projectArray object too\n      for (let project in _index__WEBPACK_IMPORTED_MODULE_1__.projectArray) {\n        // console.log(\"new thing \" + projectArray[project]);\n        let index = _index__WEBPACK_IMPORTED_MODULE_1__.projectArray[project].findIndex(\n          (obj) =>\n            obj.title === title.textContent &&\n            obj.details === details.textContent\n        );\n        //remove that index\n        _index__WEBPACK_IMPORTED_MODULE_1__.projectArray[project].splice(index, 1);\n      }\n      //save project array to the local storage\n      localStorage.setItem(\"projectArray\", _index__WEBPACK_IMPORTED_MODULE_1__.projectArray);\n    }\n  })();\n};\n//add projects to the side bar\nconst addProjects = (() => {\n  //get the project adding button\n  const button = document.querySelector(\".addProject\");\n  //get the projects div\n  const projectsDiv = document.querySelector(\"#projects\");\n  //adds a new project under the projects div on click\n  button.addEventListener(\"click\", function (e) {\n    const newProject = document.createElement(\"BUTTON\");\n    newProject.setAttribute(\"class\", \"project\");\n    newProject.textContent = getInput.getProjectInput();\n    //projectArray.push([getInput.getProjectInput()]);\n    projectsDiv.appendChild(newProject);\n    //push the created project as an array inside the projectArray object\n    let projectPush = document.querySelectorAll(\".project\");\n    for (let i = 0; i < projectPush.length; i++) {\n      _index__WEBPACK_IMPORTED_MODULE_1__.projectArray[projectPush[i].textContent] = [];\n      //save project array to the local storage\n      localStorage.setItem(\"projectArray\", JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_1__.projectArray));\n    }\n  });\n})();\nconst addDivsForProjects = () => {\n  //now an event listener\n  //will first delete .todoContainer\n  //and then create its own\n  //will use what's inside of its specific array\n  //to display what's inside of it\n\n  //use event bubbling and target the projects div\n  const wrapper = document.getElementById(\"projects\");\n  //add an event listener but check if the thing that's clicked is a button or nay\n  wrapper.addEventListener(\"click\", (event) => {\n    const isButton = event.target.nodeName === \"BUTTON\";\n    if (!isButton) {\n      return;\n    }\n    //remove all elements containing the class todoContainer\n    //this means that whenever I click on a project on the sidebar\n    //all the projects displayed on the page will be deleted\n    document.querySelectorAll(\".todoContainer\").forEach((e) => e.remove());\n    // console.dir(event.target.textContent);\n    //the following function loops through the projectArray object and finds the individual arrays inside of it\n    for (let project in _index__WEBPACK_IMPORTED_MODULE_1__.projectArray) {\n      //this is an array\n      console.log(_index__WEBPACK_IMPORTED_MODULE_1__.projectArray[project]);\n      //so that means I can loop through it with forEach\n      _index__WEBPACK_IMPORTED_MODULE_1__.projectArray[project].forEach((element, index) => {\n        console.log(element);\n        //if the selected projects name corresponds to that of the selected array's...\n        if (\n          event.target.textContent === element.project ||\n          event.target.textContent === \"Home\"\n        ) {\n          //create a container\n          const todoContainer = document.createElement(\"DIV\");\n          //give it a classname\n          todoContainer.setAttribute(\"class\", \"todoContainer\");\n          //append it to the container from index.js\n          (0,_index__WEBPACK_IMPORTED_MODULE_1__.container)().appendChild(todoContainer);\n          //Create elements\n          const checkBox = document.createElement(\"INPUT\");\n          const title = document.createElement(\"DIV\");\n          const details = document.createElement(\"DIV\");\n          const date = document.createElement(\"DIV\");\n          const priority = document.createElement(\"DIV\");\n          const deleteButton = document.createElement(\"BUTTON\");\n          // set their attributes for identification and append them to the todo container Div\n          checkBox.setAttribute(\"type\", \"checkbox\");\n          checkBox.setAttribute(\"class\", \"todoCheck\");\n          todoContainer.appendChild(checkBox);\n\n          title.textContent = element.title;\n          title.setAttribute(\"class\", \"todoTitle\");\n          todoContainer.appendChild(title);\n\n          details.textContent = element.details;\n          details.setAttribute(\"class\", \"todoDetails\");\n          todoContainer.appendChild(details);\n\n          date.innerHTML = element.date;\n          date.setAttribute(\"class\", \"todoDate\");\n          todoContainer.appendChild(date);\n\n          priority.innerHTML = element.priority;\n          priority.setAttribute(\"class\", \"todoPriority\");\n          todoContainer.appendChild(priority);\n\n          deleteButton.textContent = \"DELETE\";\n          deleteButton.setAttribute(\"class\", \"todoDelete\");\n          todoContainer.appendChild(deleteButton);\n          //create an event listener on the delete button\n          deleteButton.addEventListener(\"click\", initRemoveButton, false);\n          //deleting function\n          function initRemoveButton() {\n            this.parentNode.parentNode.removeChild(this.parentNode);\n            //find the index that contains the title and details related to the delete button\n            //look for the index in the selected array that contains the object that corresponds to the delete button's indication\n            index = _index__WEBPACK_IMPORTED_MODULE_1__.projectArray[project].findIndex(\n              (obj) =>\n                obj.title === element.title && obj.details === element.details\n            );\n            //remove that index\n            _index__WEBPACK_IMPORTED_MODULE_1__.projectArray[project].splice(index, 1);\n            //do the same for the general TodoList array\n            index = _index__WEBPACK_IMPORTED_MODULE_1__.TodoList.findIndex(\n              (obj) =>\n                obj.title === element.title && obj.details === element.details\n            );\n            //remove that index\n            _index__WEBPACK_IMPORTED_MODULE_1__.TodoList.splice(index, 1);\n\n            console.log(_index__WEBPACK_IMPORTED_MODULE_1__.TodoList);\n            console.log(_index__WEBPACK_IMPORTED_MODULE_1__.projectArray);\n            console.log(_index__WEBPACK_IMPORTED_MODULE_1__.projectArray[project]);\n          }\n        }\n      });\n    }\n  });\n};\n// function that will be called in index.js\n//it cretes dropdown menu projects\nconst addDropDown = () => {\n  //create an option element\n  const option = document.createElement(\"OPTION\");\n  //its value comes from the text input of projects\n  option.setAttribute(\"value\", getInput.getProjectInput());\n  option.textContent = getInput.getProjectInput();\n  //get the container to append the above option\n  const optionCOntainer = document.getElementById(\"projectAddTodo\");\n  optionCOntainer.appendChild(option);\n};\n\nconst displayHome = () => {\n  //get the projects in the side bar\n  const sideBarProjects = document.getElementById(\"projects\");\n  //create a button named \"Home\"\n  const homeButton = document.createElement(\"BUTTON\");\n  homeButton.setAttribute(\"class\", \"project\");\n  homeButton.textContent = \"Home\";\n  sideBarProjects.appendChild(homeButton);\n\n  //homeButton.addEventListener(\"click\", (e) => {\n  //get the todo list from the local storage and display it\n  JSON.parse(localStorage.getItem(\"TodoList\")).forEach((element, index) => {\n    console.log(\"bo\");\n    //create a container\n    const todoContainer = document.createElement(\"DIV\");\n    //give it a classname\n    todoContainer.setAttribute(\"class\", \"todoContainer\");\n    //append it to the container from index.js\n    (0,_index__WEBPACK_IMPORTED_MODULE_1__.container)().appendChild(todoContainer);\n    //Create elements\n    const checkBox = document.createElement(\"INPUT\");\n    const title = document.createElement(\"DIV\");\n    const details = document.createElement(\"DIV\");\n    const date = document.createElement(\"DIV\");\n    const priority = document.createElement(\"DIV\");\n    const deleteButton = document.createElement(\"BUTTON\");\n    // set their attributes for identification and append them to the todo container Div\n    checkBox.setAttribute(\"type\", \"checkbox\");\n    checkBox.setAttribute(\"class\", \"todoCheck\");\n    todoContainer.appendChild(checkBox);\n    title.textContent = element.title;\n    title.setAttribute(\"class\", \"todoTitle\");\n    todoContainer.appendChild(title);\n    details.textContent = element.details;\n    details.setAttribute(\"class\", \"todoDetails\");\n    todoContainer.appendChild(details);\n    date.innerHTML = element.date;\n    date.setAttribute(\"class\", \"todoDate\");\n    todoContainer.appendChild(date);\n    priority.innerHTML = element.priority;\n    priority.setAttribute(\"class\", \"todoPriority\");\n    todoContainer.appendChild(priority);\n    deleteButton.textContent = \"DELETE\";\n    deleteButton.setAttribute(\"class\", \"todoDelete\");\n    todoContainer.appendChild(deleteButton);\n    //create an event listener on the delete button\n    deleteButton.addEventListener(\"click\", initRemoveButton, false);\n    function initRemoveButton() {\n      this.parentNode.parentNode.removeChild(this.parentNode);\n      //it only deletes the index from the todolist array, but what about deleting the project form its respective proejct array?\n\n      index = _index__WEBPACK_IMPORTED_MODULE_1__.TodoList.findIndex(\n        (obj) => obj.title === element.title && obj.details === element.details\n      );\n      //remove that index\n      _index__WEBPACK_IMPORTED_MODULE_1__.TodoList.splice(index, 1);\n      //save the local storage\n      localStorage.setItem(\"TodoList\", JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_1__.TodoList));\n    }\n  });\n  // });\n};\n\n//this part might be totally useles\n//won't I already save things with local storage?\n// const displayProjects=()=>{\n//   //get the projects in the side bar\n//   const sideBarProjects= document.getElementById(\"projects\");\n//   //get the div that takes the project names dynamically\n//   const projectsDiv= document.getElementById(\"projectAddTodo\");\n//   for (i=0; i< projectsDiv.length; i++){\n//     const newProject = document.createElement(\"BUTTON\");\n//       newProject.setAttribute(\"class\", \"project\");\n//        newProject.textContent = getInput.getProjectInput();\n\n//   //     //adds a new project under the projects div on click\n//   // button.addEventListener(\"click\", function (e) {\n//   //   const newProject = document.createElement(\"BUTTON\");\n//   //   newProject.setAttribute(\"class\", \"project\");\n//   //   newProject.textContent = getInput.getProjectInput();\n//   //   //projectArray.push([getInput.getProjectInput()]);\n//   //   projectsDiv.appendChild(newProject);\n//   }\n// }\n\n\n\n\n//# sourceURL=webpack://To-do-list/./src/createDOM.js?");

/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo),\n/* harmony export */   \"newTodo\": () => (/* binding */ newTodo)\n/* harmony export */ });\n/* harmony import */ var _createDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDOM */ \"./src/createDOM.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n//Todo class\nclass Todo {\n  constructor(title, date, priority, details, project) {\n    this.title = title;\n    this.date = date;\n    this.priority = priority;\n    this.details = details;\n    this.project = project;\n  }\n}\n//Creates a new todo upon function calling\nconst newTodo = (() => {\n  //create new todo\n  const createTodo = () => {\n    const todo = new Todo();\n    //todo takes its values from  the user input taken at createDOM\n    todo.title = _createDOM__WEBPACK_IMPORTED_MODULE_0__.getInput.getTitle();\n    todo.details = _createDOM__WEBPACK_IMPORTED_MODULE_0__.getInput.getDetails();\n    todo.date = _createDOM__WEBPACK_IMPORTED_MODULE_0__.getInput.getDate();\n    todo.priority = _createDOM__WEBPACK_IMPORTED_MODULE_0__.getInput.getPriority();\n    todo.project = _createDOM__WEBPACK_IMPORTED_MODULE_0__.getInput.getDropDown();\n    //the following function does this:\n    //it loops through the projectArray object\n    //checks if the created todo shares its project name with any of the items in the object\n    //if that's the case, pushes the todo into THAT project array in the projectArray object\n    for (let project in _index__WEBPACK_IMPORTED_MODULE_1__.projectArray) {\n      if (project === todo.project) {\n        // console.log(projectArray[project]);\n        _index__WEBPACK_IMPORTED_MODULE_1__.projectArray[project].push(todo);\n        // console.log(\"this is the last one \" + projectArray[project]);\n      }\n    }\n\n    //push the new todo into the Todolist array from the index.js file\n    _index__WEBPACK_IMPORTED_MODULE_1__.TodoList.push(todo);\n\n    //save the todoList into local storage\n    if (typeof window !== \"undefined\") {\n      localStorage.setItem(\"TodoList\", JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_1__.TodoList));\n    }\n\n    return;\n  };\n\n  return { createTodo };\n})();\n\n\n\n\n//# sourceURL=webpack://To-do-list/./src/createTodo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"container\": () => (/* binding */ container),\n/* harmony export */   \"TodoList\": () => (/* binding */ TodoList),\n/* harmony export */   \"projectArray\": () => (/* binding */ projectArray)\n/* harmony export */ });\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n/* harmony import */ var _createDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDOM */ \"./src/createDOM.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n\n\n\n\n//calls the modal logic from modal.js\n(0,_modal__WEBPACK_IMPORTED_MODULE_2__.modalShortCut)();\n\n(0,_modal__WEBPACK_IMPORTED_MODULE_2__.projectModalShortCut)();\n//an array that holds the to-dos\nlet TodoList = [\n  {\n    title: \"first to-do\",\n    date: \"sometime\",\n    priority: \"chill\",\n    details: \"It's about something\",\n  },\n];\n//I reassigne TodoList to use the local storage in createTodo.js\n//in the form of TodoList\nTodoList = JSON.parse(localStorage.getItem(\"TodoList\"));\n//object that contains all the project arrays\n//I'll use this object to display all the saved projects later on\nlet projectArray = {};\n//do the same local storage trick for the project array\nprojectArray = JSON.parse(localStorage.getItem(\"projectArray\"));\n\n//container Div\nconst container = () => {\n  return document.querySelector(\".container\");\n};\n\nconst button = document.querySelector(\".addTodo\");\n//function that starts the to-do adding process\nbutton.addEventListener(\"click\", function () {\n  //create new todo\n  _createTodo__WEBPACK_IMPORTED_MODULE_0__.newTodo.createTodo();\n  console.log(TodoList);\n  //call the div adding function\n  (0,_createDOM__WEBPACK_IMPORTED_MODULE_1__.addDivs)();\n  //dunno what's this\n  _modal__WEBPACK_IMPORTED_MODULE_2__.modal.modal2().style.display = \"none\";\n  console.log(projectArray);\n});\n\nconst projectButton = document.querySelector(\".addProject\");\nprojectButton.addEventListener(\"click\", function () {\n  //I have no idea what is this. Forgotten already.\n  _modal__WEBPACK_IMPORTED_MODULE_2__.addProject.modal2().style.display = \"none\";\n  //call the dropdown menu project creating function\n  (0,_createDOM__WEBPACK_IMPORTED_MODULE_1__.addDropDown)();\n});\n\n(0,_createDOM__WEBPACK_IMPORTED_MODULE_1__.addDivsForProjects)();\n\nwindow.onload = (0,_createDOM__WEBPACK_IMPORTED_MODULE_1__.displayHome)();\n\nconsole.log(JSON.parse(localStorage.getItem(\"TodoList\")));\n\n//this is a quality controle\nif (typeof window !== \"undefined\") {\n  console.log(\"we are running on the client\");\n} else {\n  console.log(\"we are running on the server\");\n}\n\n\n\n\n//# sourceURL=webpack://To-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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