import { Todo, newTodo } from "./createTodo";
import { container, TodoList, projectArray } from "./index";

//Gets the user input (value) and exports it
const getInput = (() => {
  const getTitle = () => {
    return document.getElementById("title").value;
  };
  const getDetails = () => {
    return document.getElementById("details").value;
  };

  const getDate = () => {
    return document.getElementById("date").value;
  };

  const getPriority = () => {
    return document.querySelector('input[name="priority"]:checked').value;
  };
  //get the input from project
  const getProjectInput = () => {
    return document.getElementById("projectAdd").value;
  };
  //get the input from project drop down menu
  const getDrowDown = () => {
    const input = document.getElementById("projectAddTodo");
    return input.options[input.selectedIndex].text;
  };

  return {
    getTitle,
    getDetails,
    getDate,
    getPriority,
    getProjectInput,
    getDrowDown,
  };
})();
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
  const date = document.createElement("DIV");
  const priority = document.createElement("DIV");
  const deleteButton = document.createElement("BUTTON");
  // set their attributes for identification and append them to the todo container Div
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("class", "todoCheck");
  todoContainer.appendChild(checkBox);

  title.textContent = getInput.getTitle();
  title.setAttribute("class", "todoTitle");
  todoContainer.appendChild(title);

  details.textContent = getInput.getDetails();
  details.setAttribute("class", "todoDetails");
  todoContainer.appendChild(details);

  date.innerHTML = getInput.getDate();
  date.setAttribute("class", "todoDate");
  todoContainer.appendChild(date);

  priority.innerHTML = getInput.getPriority();
  priority.setAttribute("class", "todoPriority");
  todoContainer.appendChild(priority);

  deleteButton.textContent = "DELETE";
  deleteButton.setAttribute("class", "todoDelete");
  todoContainer.appendChild(deleteButton);
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
        obj.title === getInput.getTitle() &&
        obj.details === getInput.getDetails()
    );
    //remove that index
    TodoList.splice(index, 1);
  }
};
//add projects to the side bar
const addProjects = (() => {
  //get the project adding button
  const button = document.querySelector(".addProject");
  //get the projects div
  const projectsDiv = document.querySelector("#projects");
  //adds a new project under the projects div on click
  button.addEventListener("click", function (e) {
    const newProject = document.createElement("BUTTON");
    newProject.setAttribute("class", "project");
    newProject.textContent = getInput.getProjectInput();
    projectArray.push([getInput.getProjectInput()]);
    projectsDiv.appendChild(newProject);
  });
})();

export { getInput, addDivs, addProjects };
