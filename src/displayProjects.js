import { Todo, newTodo } from "./createTodo";
import { container, TodoList, projectArray } from "./index";
import { getInput } from "./getInput";
import { addProjects } from "./addProjects";
import { addDivs } from "./addDivs";
import { addDivsForProjects } from "./addDivsForProjects";
import { addDropDown, localDropDown } from "./dropDown";

const displayProjects = () => {
  const projectsDiv = document.querySelector("#projects");
  //why's this here?
  // let projects = document.querySelectorAll(".project");
  for (let keys in JSON.parse(localStorage.getItem("projectArray"))) {
    if (keys != "Home") {
      const newProject = document.createElement("BUTTON");
      newProject.setAttribute("class", "project");
      newProject.textContent = keys;
      projectsDiv.appendChild(newProject);
    }
  }
};
export { displayProjects };
