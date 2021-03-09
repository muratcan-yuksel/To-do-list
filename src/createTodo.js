import { getInput } from "./createDOM";
import { TodoList } from "./index";
//Todo class
class Todo {
  constructor(title, dueDate, priority, comments) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.comments = comments;
  }
}
//Creates a new todo upon function calling
const newTodo = (() => {
  //create new todo
  const createTodo = () => {
    const todo = new Todo();
    //todo takes its values from  the user input taken at createDOM
    todo.title = getInput.getTitle();
    console.log(todo);
    //push the new todo into the Todolist array from the index.js file
    TodoList.push(todo);
    console.log(TodoList);
    return;
  };

  return { createTodo };
})();

export { Todo, newTodo };
