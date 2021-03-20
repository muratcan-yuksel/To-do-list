import { Todo, newTodo } from "./createTodo";
import { container, TodoList, projectArray } from "./index";
import { getInput } from "./getInput";
import { displayProjects } from "./displayProjects";
import { addProjects } from "./addProjects";
import { format, compareAsc } from "date-fns";

//creates Divs and writes the user input into the DOM
const addDivs = () => {
  //create a todo container
  //the reason to do this is to be able to delete a singular to do element
  const todoContainer = document.createElement("DIV");
  //give it a classname
  todoContainer.setAttribute("class", "todoContainer");
  //append it to the container from index.js
  container().appendChild(todoContainer);
  //Create elements
  const checkBox = document.createElement("INPUT");
  const title = document.createElement("DIV");
  const details = document.createElement("DIV");
  const toolTip = document.createElement("SPAN");

  const date = document.createElement("DIV");
  const priority = document.createElement("DIV");
  const deleteButton = document.createElement("BUTTON");
  // set their attributes for identification and append them to the todo container Div
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("class", "todoCheck");
  todoContainer.appendChild(checkBox);

  title.textContent = TodoList[TodoList.length - 1].title;
  title.setAttribute("class", "todoTitle");
  todoContainer.appendChild(title);

  details.textContent = "Details";
  details.setAttribute("class", "todoDetails");
  todoContainer.appendChild(details);

  toolTip.textContent = TodoList[TodoList.length - 1].details;
  toolTip.setAttribute("class", "toolTipText");
  details.appendChild(toolTip);

  //format date using date-fns package
  const format = require("date-fns/format");
  let test = new Date(TodoList[TodoList.length - 1].date);
  date.innerHTML = format(test, "MMMM dd, yyyy");
  date.setAttribute("class", "todoDate");
  todoContainer.appendChild(date);

  priority.innerHTML = TodoList[TodoList.length - 1].priority;
  priority.setAttribute("class", "todoPriority");
  todoContainer.appendChild(priority);

  deleteButton.textContent = "DELETE";
  deleteButton.setAttribute("class", "todoDelete");
  todoContainer.appendChild(deleteButton);
  //a deleteing module to keep things just a bit tidier
  //add an event listener to the delete button
  //so that it can delete the todo from the DOM
  deleteButton.addEventListener("click", initRemoveButton, false);
  //delete its parent element
  function initRemoveButton() {
    this.parentNode.parentNode.removeChild(this.parentNode);
    console.log(TodoList);
    //the below function finds the deleted todo's index in the array, and removes it
    // I couldn't think of a way to implement this in the creaTodo.js
    let index = TodoList.findIndex(
      (obj) =>
        obj.title === title.textContent && obj.details === details.textContent
    );
    //remove that index
    TodoList.splice(index, 1);
    localStorage.setItem("TodoList", JSON.stringify(TodoList));

    //this function deletes the same element from the created array in projectArray object too
    for (let project in projectArray) {
      // console.log("new thing " + projectArray[project]);
      let index = projectArray[project].findIndex(
        (obj) =>
          obj.title === title.textContent && obj.details === details.textContent
      );
      //remove that index
      projectArray[project].splice(index, 1);
      //localStorage.setItem("projectArray", JSON.stringify(projectArray));
    }
    localStorage.setItem("TodoList", JSON.stringify(TodoList));
    console.log(TodoList);
    // // console.log(JSON.parse(localStorage.getItem("projectArray")));
    console.log(projectArray);
    localStorage.setItem("projectArray", JSON.stringify(projectArray));
  }

  //added this one here from index.js/ can be changed dunno
  // //localStorage.setItem("projectArray", JSON.stringify(projectArray));
};

export { addDivs };
