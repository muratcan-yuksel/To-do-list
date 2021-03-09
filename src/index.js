import { Todo } from "./createTodo";

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
const todo = new Todo("Todo list", "trying out", "sometime", "chill");
console.log(todo);
container.textContent = todo.title + " " + todo.description;
