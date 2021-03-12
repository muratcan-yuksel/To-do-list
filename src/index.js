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
});

const projectButton = document.getElementById("projectButton");
projectButton.addEventListener("click", function () {});

export { container, TodoList };
