import { Todo, newTodo } from "./createTodo";
import { container, TodoList, projectArray } from "./index";
import { getInput } from "./getInput";

const addProjects = () => {
  //get the project adding button
  const button = document.querySelector(".addProject");

  button.addEventListener("click", function (e) {
    const newProject = getInput.getProjectInput();
    console.log(getInput.getProjectInput());
    projectArray[newProject] = [];
    // console.log(newProject);
    // console.log(projectArray[projectArray.length - 1]);
    console.log(projectArray);
    // //side projects
    // // get the projects div
    const projectsDiv = document.querySelector("#projects");
    for (let project in projectArray) {
      const projectButton = document.createElement("BUTTON");
      projectButton.setAttribute("class", "project");
      projectButton.textContent = newProject;
      //projectArray.push([getInput.getProjectInput()]);
      projectsDiv.appendChild(projectButton);
    }
  });
};

//it cretes dropdown menu projects
const addDropDown = () => {
  //create an option element
  const option = document.createElement("OPTION");
  //its value comes from the text input of projects
  option.setAttribute("value", getInput.getProjectInput());
  option.textContent = getInput.getProjectInput();
  //get the container to append the above option
  const optionCOntainer = document.getElementById("projectAddTodo");
  optionCOntainer.appendChild(option);
};

// const sideProjects = () => {
//   //get the project adding button
//   const button = document.querySelector(".addProject");
//   button.addEventListener("click", function (e) {

//   });
// };

export { addProjects, addDropDown };

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
