import { getInput } from "./createDOM";
//Todo class
class Todo {
  constructor(title, description, dueDate, priority, comments) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.comments = comments;
  }
}
//Creates a new todo upon fucntion calling
const newTodo = (() => {
  //create new todo
  const createTodo = () => {
    const todo = new Todo();
    //gets the values from createDOM.js
    todo.title = getInput.getTitle();
    todo.description = getInput.getDescription();
    console.log(todo);
    return;
  };
  return { createTodo };
})();

export { Todo, newTodo };
