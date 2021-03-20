import { Todo, newTodo } from "./createTodo";
import { getInput } from "./getInput";
import { addDivs } from "./addDivs";
import { addProjects } from "./addProjects";
import { displayProjects } from "./displayProjects";
import { addDivsForProjects } from "./addDivsForProjects";
import { addDropDown, localDropDown } from "./dropDown";
import { displayHome } from "./displayHome";
import { displayHomeButton } from "./homeButton";
import { deleteProjects } from "./deleteProjects";
import {
  modal,
  modalShortCut,
  addProject,
  projectModalShortCut,
  editShortCut,
  editTodo,
} from "./modal";

//calls the modal logic from modal.js
modalShortCut();

projectModalShortCut();

editShortCut();
//an array that holds the to-dos
let TodoList = [
  // {
  //   title: "first to-do",
  //   date: "sometime",
  //   priority: "chill",
  //   details: "It's about something",
  // },
];
//object that contains all the project arrays
//I'll use this object to display all the saved projects later on
//there's this Home key and an empty array value
//so that when the user starts blank, they can add something without specifying a project folder
let projectArray = { Home: [] };

//container Div
const container = () => {
  return document.querySelector(".container");
};

const button = document.querySelector(".addTodo");
//function that starts the to-do adding process
button.addEventListener("click", function () {
  //create new todo
  newTodo.createTodo();
  console.log(TodoList);
  //call the div adding function
  addDivs();
  //dunno what's this
  modal.modal2().style.display = "none";
  console.log(projectArray);
  localStorage.setItem("TodoList", JSON.stringify(TodoList));
  // localStorage.setItem("projectArray", JSON.stringify(projectArray));
});

const projectButton = document.querySelector(".addProject");
projectButton.addEventListener("click", function () {
  //I have no idea what is this. Forgotten already.
  //prolly this one is to close the modal
  addProject.modal2().style.display = "none";
  //call the dropdown menu project creating function
  addDropDown();
});

addDivsForProjects();

window.onload = displayProjects();
window.onload = localDropDown;
//create a swapping function so that you won't lose your stored todos in every new session
let savedList = JSON.parse(localStorage.getItem("TodoList"));
function swapTodoList() {
  //if the list is null upon pageload, I can't add new todos
  if (JSON.parse(localStorage.getItem("TodoList")) != null) {
    let temp;
    temp = TodoList;
    TodoList = savedList;
    savedList = temp;

    console.log(TodoList);
    console.log(savedList);
    console.log(JSON.parse(localStorage.getItem("TodoList")));
  }
}
window.onload = swapTodoList();

// do the same for the projects
let savedProjects = JSON.parse(localStorage.getItem("projectArray"));
function swapProjects() {
  if (JSON.parse(localStorage.getItem("projectArray")) != null) {
    let temp;
    temp = projectArray;
    projectArray = savedProjects;
    savedProjects = temp;
    //this is so that projectArray won't be null on window load
    // projectArray = {};
    console.log(projectArray);
    console.log(savedProjects);
    console.log(JSON.parse(localStorage.getItem("projectArray")));
  }
}

window.onload = swapProjects();

window.onload = localDropDown();
window.onload = displayHome();

//delete projects
deleteProjects();
export { container, TodoList, projectArray };
