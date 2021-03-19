import { Todo, newTodo } from "./createTodo";
import { container, TodoList, projectArray } from "./index";
import { getInput } from "./getInput";
import { addProjects } from "./addProjects";
import { addDivs } from "./addDivs";
import { displayProjects } from "./displayProjects";
import { addDropDown, localDropDown } from "./dropDown";
import { addDivsForProjects } from "./addDivsForProjects";

const deleteProjects = () => {
  //get the container of projects on the side bar
  const projects = document.querySelectorAll(".project");
  //loop through them
  projects.forEach((sideName) => {
    console.log(sideName.textContent);
    //if it's not the home button...
    if (sideName.textContent != "Home") {
      //the following function loops through the projectArray object and finds the individual arrays inside of it
      for (let project in projectArray) {
        //we have the individual arrays now
        //"project" will give the name of the array
        //0,1,2 etc. in our situation
        //and projectArray[project] will give the array like [1,2,"a"] etc.
        if (
          //if the project name on the sidebar and the project (as an array matches) and
          //if the array is empty
          sideName.textContent === project &&
          projectArray[project].length === 0
        ) {
          sideName.addEventListener("click", (event) => {
            //this one is so that what I create won't repeat itself on each click
            document
              .querySelectorAll(".projectDelete")
              .forEach((e) => e.remove());
            //create a container
            const projectDelete = document.createElement("BUTTON");
            //give it a classname
            projectDelete.setAttribute("class", "projectDelete");
            container().appendChild(projectDelete);
            projectDelete.textContent = "Delete this project";
            //an event listener for the delete button
            projectDelete.addEventListener("click", (e) => {
              //remove the project name on the side bar
              sideName.remove();
              //remove the project from the project array
              delete projectArray[project];
              console.log(project);
              console.log(projectArray);
              //save it to the local storage
              localStorage.setItem(
                "projectArray",
                JSON.stringify(projectArray)
              );
            });
          });
        } else if (
          //if the array is not empty, delete the created "delete this project" thingy
          sideName.textContent === project &&
          projectArray[project].length > 0
        )
          sideName.addEventListener("click", (event) => {
            document
              .querySelectorAll(".projectDelete")
              .forEach((e) => e.remove());
          });
      }
    }
  });

  //   for (let i = 0; i < projects.length; i++) {
  //     console.log("but this? " + projects.length);
  //     console.log(projects);
  //   }
  // //add an event listener to the buttons on the sidebar
  //   wrapper.addEventListener("click", (event) => {
  //       //but only if it's a button that we're clicking on
  //     const isButton = event.target.nodeName === "BUTTON";
  //     if (!isButton) {
  //       return;
  //     }

  //   });
};

export { deleteProjects };

// sideName.addEventListener("click", (event) => {
//     console.log("side");
//     //create a container
//     const projectDeleteContainer = document.createElement("DIV");
//     //give it a classname
//     projectDeleteContainer.setAttribute("class", "projectDelete");
//     //append it to the container from index.js
//     container().appendChild(projectDeleteContainer);
//     const projectDelete = document.createElement("DIV");
//     projectDeleteContainer.appendChild(projectDelete);
//     projectDelete.textContent = "Delete this project";
//   });
