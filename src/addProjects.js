import { Todo, newTodo } from "./createTodo";
import { container, TodoList, projectArray } from "./index";

const addProjects = () => {
  //get the project adding button
  const button = document.querySelector(".addProject");
  button.addEventListener("click", function (e) {
    const newProject = getInput.getProjectInput();
    projectArray.push(newProject);
    console.log(projectArray);
  });
};

export { addProjects };

// //get the project adding button
// const button = document.querySelector(".addProject");
// //get the projects div
// const projectsDiv = document.querySelector("#projects");
// //adds a new project under the projects div on click
// button.addEventListener("click", function (e) {
//   const newProject = document.createElement("BUTTON");
//   newProject.setAttribute("class", "project");
//   newProject.textContent = projectArray[projectArray.length - 1].project;
//   //projectArray.push([getInput.getProjectInput()]);
//   projectsDiv.appendChild(newProject);
//   //push the created project as an array inside the projectArray object
//   let projectPush = document.querySelectorAll(".project");
//   for (let i = 0; i < projectPush.length; i++) {
//     projectArray[projectPush[i].textContent] = [];
//   }
// });
