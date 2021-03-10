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
//creates Divs and writes the user input into the DOM
const addDivs = () => {
  //Create elements
  const checkBox = document.createElement("INPUT");
  const title = document.createElement("DIV");
  const details = document.createElement("DIV");
  const date = document.createElement("DIV");
  const priority = document.createElement("DIV");
  const deleteButton = document.createElement("BUTTON");
  // set their attributes for identification and append them to the container Div
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("class", "todoCheck");
  container().appendChild(checkBox);

  title.textContent = getInput.getTitle();
  title.setAttribute("class", "todoTitle");
  container().appendChild(title);

  details.textContent = getInput.getDetails();
  details.setAttribute("class", "todoDetails");
  container().appendChild(details);

  date.innerHTML = getInput.getDate();
  date.setAttribute("class", "todoDate");
  container().appendChild(date);

  priority.innerHTML = getInput.getPriority();
  priority.setAttribute("class", "todoPriority");
  container().appendChild(priority);

  deleteButton.textContent = "DELETE";
  deleteButton.setAttribute("class", "todoDelete");
  container().appendChild(deleteButton);
};

export { getInput, addDivs };
