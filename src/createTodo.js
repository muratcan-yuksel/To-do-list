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
//Creates a new todo upon function calling
const newTodo = (() => {
  //create new todo
  const createTodo = () => {
    const todo = new Todo();
    console.log(todo);
    return;
  };
  const getTitle = () => {
    //gets the title from createDOM.js and appends it into the tod object
    return getInput.getTitle();
  };
  //gets the description from createDOM.js and appends it into the tod object
  const getDescription = () => {
    return getInput.getDescription();
  };
  return { createTodo, getTitle, getDescription };
})();

export { Todo, newTodo };
