import { Todo, newTodo } from "./createTodo";
import {
  getInput,
  addDivs,
  addDivsForProjects,
  addDropDown,
  displayHome,
  displayProjects,
  localDropDown,
} from "./createDOM";
import {
  modal,
  modalShortCut,
  addProject,
  projectModalShortCut,
} from "./modal";

//calls the modal logic from modal.js
modalShortCut();

projectModalShortCut();
//an array that holds the to-dos
const TodoList = [
  {
    title: "first to-do",
    date: "sometime",
    priority: "chill",
    details: "It's about something",
  },
];
//object that contains all the project arrays
//I'll use this object to display all the saved projects later on
const projectArray = {};

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
});

const projectButton = document.querySelector(".addProject");
projectButton.addEventListener("click", function () {
  //I have no idea what is this. Forgotten already.
  addProject.modal2().style.display = "none";
  //call the dropdown menu project creating function
  addDropDown();
});

addDivsForProjects();

window.onload = displayHome();
window.onload = displayProjects();
window.onload = localDropDown;

export { container, TodoList, projectArray };
