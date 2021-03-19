import { Todo, newTodo } from "./createTodo";
import { container, TodoList, projectArray } from "./index";
import { getInput } from "./getInput";
import { addDivs } from "./addDivs";
import { displayProjects } from "./displayProjects";
import { addDivsForProjects } from "./addDivsForProjects";

//add projects to the side bar
const addProjects = (() => {
  //get the project adding button
  const button = document.querySelector(".addProject");
  //get the projects div
  const projectsDiv = document.querySelector("#projects");
  //adds a new project under the projects div on click
  button.addEventListener("click", function (e) {
    const newProject = document.createElement("BUTTON");
    newProject.setAttribute("class", "project");
    newProject.textContent = getInput.getProjectInput();
    //projectArray.push([getInput.getProjectInput()]);
    projectsDiv.appendChild(newProject);
    //push the created project as an array inside the projectArray object
    let projectPush = document.querySelectorAll(".project");
    for (let i = 0; i < projectPush.length; i++) {
      //checks if the project array object contains the textcontent of the i(project name)
      //because if not, I tried to do sth else which resulted all the previous arrays getting emptied whenever I added a new array
      if (projectPush[i].textContent in projectArray == false) {
        projectArray[projectPush[i].textContent] = [];
      }
    }
  });
})();

export { addProjects };

/*
import { Todo, newTodo } from "./createTodo";
import { container, TodoList, projectArray } from "./index";
import { getInput } from "./getInput";
import { addDivs } from "./addDivs";
import { displayProjects } from "./displayProjects";
import { addDivsForProjects } from "./addDivsForProjects";

//add projects to the side bar
const addProjects = (() => {
  //get the project adding button
  const button = document.querySelector(".addProject");
  //get the projects div
  const projectsDiv = document.querySelector("#projects");
  //adds a new project under the projects div on click
  button.addEventListener("click", function (e) {
    const projects = document.querySelectorAll(".project");
    //loop through them
    projects.forEach((sideName) => {
      console.log(sideName.textContent);
      //if it's not the home button...
      if (sideName.textContent != getInput.getProjectInput()) {
        const newProject = document.createElement("BUTTON");
        newProject.setAttribute("class", "project");
        newProject.textContent = getInput.getProjectInput();
        //projectArray.push([getInput.getProjectInput()]);
        projectsDiv.appendChild(newProject);
        //push the created project as an array inside the projectArray object
        let projectPush = document.querySelectorAll(".project");
        for (let i = 0; i < projectPush.length; i++) {
          //checks if the project array object contains the textcontent of the i(project name)
          //because if not, I tried to do sth else which resulted all the previous arrays getting emptied whenever I added a new array
          if (projectPush[i].textContent in projectArray == false) {
            projectArray[projectPush[i].textContent] = [];
          }
        }
      }
    });
  });
})();

export { addProjects };


*/
