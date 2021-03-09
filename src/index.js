import { Todo } from "./createTodo";
import { getInput } from "./createDOM";

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
  const todo = new Todo();
  todo.title = getInput.getTitle();
  todo.description = getInput.getDescription();
  //todo.comments = getComments;
  console.log(todo);
  const title = document.createElement("DIV");
  const description = document.createElement("DIV");
  const comments = document.createElement("DIV");
  title.textContent = todo.title;
  container.appendChild(title);
  description.textContent = todo.description;
  container.appendChild(description);
  // comments.textContent = todo.comments;
  // container.appendChild(comments);
});
