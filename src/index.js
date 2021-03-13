import { Todo, newTodo } from "./createTodo";
import { getInput, addDivs } from "./createDOM";
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
//array that contains all the projects
//I'll use this array to display all the saved projects later on
const projectArray = {};
//container Div
const container = () => {
  return document.querySelector(".container");
};

const button = document.querySelector(".addTodo");
//function that starts the to-do adding process
button.addEventListener("click", function () {
  newTodo.createTodo();
  console.log(TodoList);
  addDivs();
  modal.modal2().style.display = "none";
  console.log(projectArray);
});

const projectButton = document.querySelector(".addProject");
projectButton.addEventListener("click", function () {
  addProject.modal2().style.display = "none";
});

export { container, TodoList, projectArray };
