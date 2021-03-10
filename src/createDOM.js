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
  const title = document.createElement("DIV");
  const details = document.createElement("DIV");
  const date = document.createElement("DIV");
  const priority = document.createElement("DIV");

  title.textContent = getInput.getTitle();
  container().appendChild(title);

  details.textContent = getInput.getDetails();
  container().appendChild(details);

  date.innerHTML = getInput.getDate();
  container().appendChild(date);

  priority.innerHTML = getInput.getPriority();
  container().appendChild(priority);
};

export { getInput, addDivs };
