import { Todo, newTodo } from "./createTodo";
import { getInput, addDivs } from "./createDOM";

//an array that holds the to-dos
const TodoList = [
  {
    title: "first to-do",
    dueDate: "sometime",
    priority: "chill",
    details: "It's about something",
  },
];
//container Div
const container = () => {
  return document.querySelector(".container");
};

const button = document.querySelector(".button");

button.addEventListener("click", function () {
  newTodo.createTodo();

  addDivs();
});

export { container, TodoList };

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
