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
  //const wrapper = document.getElementById("projects");

  const projects = document.querySelectorAll(".project");
  projects.forEach((sideName) => {
    console.log(sideName.textContent);
    if (sideName.textContent != "Home") {
      //the following function loops through the projectArray object and finds the individual arrays inside of it
      for (let project in projectArray) {
        //we have the individual arrays now
        //"project" will give the name of the array
        //0,1,2 etc. in our situation
        //and projectArray[project] will give the array like [1,2,"a"] etc.
        if (
          sideName.textContent === project &&
          projectArray[project].length === 0
        ) {
          alert("tru fam");
        }
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
