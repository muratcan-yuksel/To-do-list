import { Todo, newTodo } from "./createTodo";
import { container } from "./index";

const createDOM = (() => {
  //get the container Div
  const container = document.querySelector(".container");

  const title = document.createElement("DIV");
  title.setAttribute("class", "title");
})();

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

  return { getTitle, getDetails, getDate };
})();
//creates Divs and writes the user input into the DOM
const addDivs = () => {
  const title = document.createElement("DIV");
  const details = document.createElement("DIV");

  title.textContent = getInput.getTitle();
  container().appendChild(title);

  details.textContent = getInput.getDetails();
  container().appendChild(details);

  details.textContent = getInput.getDate();
  container().appendChild(details);
};

export { getInput, addDivs };
