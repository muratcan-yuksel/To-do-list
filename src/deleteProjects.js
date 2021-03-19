import { Todo, newTodo } from "./createTodo";
import { container, TodoList, projectArray } from "./index";
import { getInput } from "./getInput";
import { addProjects } from "./addProjects";
import { addDivs } from "./addDivs";
import { displayProjects } from "./displayProjects";
import { addDropDown, localDropDown } from "./dropDown";
import { addDivsForProjects } from "./addDivsForProjects";

const deleteProjects = () => {
  const wrapper = document.getElementById("projects");

  wrapper.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton) {
      return;
    }
    //the following function loops through the projectArray object and finds the individual arrays inside of it
    for (let project in projectArray) {
      if (event.target.textContent === project) {
        alert("tru fam");
      }
    }
  });
};

export { deleteProjects };
