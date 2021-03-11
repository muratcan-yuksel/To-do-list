import { Todo, newTodo } from "./createTodo";
import { container } from "./index";

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

  return { getTitle, getDetails, getDate, getPriority };
})();

//these are global bcs I want to use them in more than one function
//Create elements
const checkBox = document.createElement("INPUT");
const title = document.createElement("DIV");
const details = document.createElement("DIV");
const date = document.createElement("DIV");
const priority = document.createElement("DIV");
const deleteButton = document.createElement("BUTTON");
//create a todo container
//the reason to do this is to be able to delete a singular to do element
const todoContainer = document.createElement("DIV");

//creates Divs and writes the user input into the DOM
const addDivs = () => {
  //give it a classname
  todoContainer.setAttribute("class", "todoContainer");
  //append it to the container from index.js
  container().appendChild(todoContainer);

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
  //the answer is todoContainer
  console.log(deleteButton.parentNode);
};

const deleteTodo = () => {};

export { getInput, addDivs };
