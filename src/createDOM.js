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
    const date = document.getElementById("date").value;
    return date;
  };

  return { getTitle, getDetails, getDate };
})();
//creates Divs and writes the user input into the DOM
const addDivs = () => {
  const title = document.createElement("DIV");
  const details = document.createElement("DIV");
  const date1 = document.createElement("DIV");

  title.textContent = getInput.getTitle();
  container().appendChild(title);

  details.textContent = getInput.getDetails();
  container().appendChild(details);

  date1.textContent = "dateoy";
  //getInput.getDate();
  container().appendChild(date1);
};

export { getInput, addDivs };
