import { getInput } from "./getInput";
import { TodoList, projectArray } from "./index";
import { deleteProjects } from "./deleteProjects";

//Todo class
class Todo {
  constructor(title, date, priority, details, project) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.details = details;
    this.project = project;
  }
}
//Creates a new todo upon function calling
const newTodo = (() => {
  //create new todo
  const createTodo = () => {
    const todo = new Todo();
    //todo takes its values from  the user input taken at createDOM
    todo.title = getInput.getTitle();
    todo.details = getInput.getDetails();
    todo.date = getInput.getDate();
    todo.priority = getInput.getPriority();
    todo.project = getInput.getDropDown();
    todo.status = "Not Done";
    //the following function does this:
    //it loops through the projectArray object
    //checks if the created todo shares its project name with any of the items in the object
    //if that's the case, pushes the todo into THAT project array in the projectArray object
    for (let project in projectArray) {
      if (project === todo.project) {
        // console.log(projectArray[project]);
        projectArray[project].push(todo);
        // console.log("this is the last one " + projectArray[project]);
        localStorage.setItem("projectArray", JSON.stringify(projectArray));
      }
    }
    //push the new todo into the Todolist array from the index.js file
    TodoList.push(todo);
    //save the todoList into local storage

    return;
  };

  return { createTodo };
})();

export { Todo, newTodo };
