import { Todo } from "./createTodo";

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
  const getDescription = () => {
    return document.getElementById("description").value;
  };

  return { getTitle, getDescription };
})();

export { getInput };
