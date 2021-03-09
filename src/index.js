import { Todo, newTodo } from "./createTodo";
import { getInput, addDivs } from "./createDOM";

//an array that holds the to-dos
const TodoList = [
  {
    title: "first to-do",
    dueDate: "sometime",
    priority: "chill",
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
