import { Todo } from "./createTodo";

const createDOM = (() => {
  //get the container Div
  const container = document.querySelector(".container");

  const title = document.createElement("DIV");
  title.setAttribute("class", "title");
})();

const getInput = (() => {
  const getTitle = () => {
    document.getElementById("title").value;
  };
  const getDescription = () => {
    document.getElementById("description").value;
  };

  return { getTitle, getDescription };
})();

export { getInput };
