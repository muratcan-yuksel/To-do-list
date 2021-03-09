import { Todo, newTodo } from "./createTodo";
import { getInput, addDivs } from "./createDOM";

//an array that holds the to-dos
const TodoList = [
  {
    title: "first to-do",
    description: "trying out",
    dueDate: "sometime",
    priority: "chill",
  },
];

const container = document.querySelector(".container");
// const todo = new Todo();
// console.log(todo);
// container.textContent = todo.title + " " + todo.description;

//this is the core concept that I want to implement
const button = document.querySelector(".button");
button.addEventListener("click", function () {
  // const getTitle = document.getElementById("title").value;
  // const getDescription = document.getElementById("description").value;

  //const getComments = document.getElementById("comments").value;
  //const todo = new Todo();
  newTodo.createTodo();
  // todo.title = getInput.getTitle();
  // todo.description = getInput.getDescription();

  // console.log(todo);

  // const title = document.createElement("DIV");
  // const description = document.createElement("DIV");

  // title.textContent = newTodo.getTitle();
  // container.appendChild(title);
  // description.textContent = newTodo.getDescription();
  // container.appendChild(description);

  addDivs();
});
