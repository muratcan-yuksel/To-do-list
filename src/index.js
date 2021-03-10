import { Todo, newTodo } from "./createTodo";
import { getInput, addDivs } from "./createDOM";
import { modal } from "./modal";

//calls the modal logic from modal.js
modal();

//an array that holds the to-dos
const TodoList = [
  {
    title: "first to-do",
    dueDate: "sometime",
    priority: "chill",
    details: "It's about something",
  },
];
//container Div
const container = () => {
  return document.querySelector(".container");
};

const button = document.querySelector(".button");

button.addEventListener("click", function () {
  newTodo.createTodo();

  addDivs();
});

export { container, TodoList };
