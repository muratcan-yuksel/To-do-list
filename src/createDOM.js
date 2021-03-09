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
  const getComments = () => {
    return document.getElementById("comments").value;
  };

  return { getTitle, getComments };
})();
//creates Divs and writes the user input into the DOM
const addDivs = () => {
  const title = document.createElement("DIV");
  const comments = document.createElement("DIV");

  title.textContent = getInput.getTitle();
  container().appendChild(title);

  comments.textContent = getInput.getComments();
  container().appendChild(comments);
};

export { getInput, addDivs };
