import { Todo, newTodo } from "./createTodo";
import { container, TodoList, projectArray } from "./index";
import { getInput } from "./getInput";
import { addProjects } from "./addProjects";
import { addDivs } from "./addDivs";
import { displayProjects } from "./displayProjects";
import { addDropDown, localDropDown } from "./dropDown";
import { format, compareAsc } from "date-fns";

const addDivsForProjects = () => {
  //now an event listener
  //will first delete .todoContainer
  //and then create its own
  //will use what's inside of its specific array
  //to display what's inside of it

  //use event bubbling and target the projects div
  const wrapper = document.getElementById("projects");
  //add an event listener but check if the thing that's clicked is a button or nay
  wrapper.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton) {
      return;
    }
    //remove all elements containing the class todoContainer
    //this means that whenever I click on a project on the sidebar
    //all the projects displayed on the page will be deleted
    document.querySelectorAll(".todoContainer").forEach((e) => e.remove());
    // console.dir(event.target.textContent);
    //the following function loops through the projectArray object and finds the individual arrays inside of it
    for (let project in projectArray) {
      //this is an array
      console.log(projectArray[project]);
      //so that means I can loop through it with forEach
      projectArray[project].forEach((element, index) => {
        //if the selected projects name corresponds to that of the selected array's...
        if (
          //don't display when it's home, because later on home will be displaying EVERYTHING
          event.target.textContent ===
          element.project /*&&
            event.target.textContent !== "Home"*/
        ) {
          //create a container
          const todoContainer = document.createElement("DIV");
          //give it a classname
          todoContainer.setAttribute("class", "todoContainer");
          //append it to the container from index.js
          container().appendChild(todoContainer);
          //Create elements
          const checkBox = document.createElement("INPUT");
          const title = document.createElement("DIV");
          const details = document.createElement("DIV");
          const toolTip = document.createElement("SPAN");

          const date = document.createElement("DIV");
          const priority = document.createElement("DIV");
          const deleteButton = document.createElement("BUTTON");
          // set their attributes for identification and append them to the todo container Div
          checkBox.setAttribute("type", "checkbox");
          checkBox.setAttribute("class", "todoCheck");
          todoContainer.appendChild(checkBox);

          title.textContent = element.title;
          title.setAttribute("class", "todoTitle");
          todoContainer.appendChild(title);

          details.textContent = "Details";
          details.setAttribute("class", "todoDetails");
          todoContainer.appendChild(details);

          toolTip.textContent = element.details;
          toolTip.setAttribute("class", "toolTipText");
          details.appendChild(toolTip);

          //format date using date-fns package
          const format = require("date-fns/format");
          let test = new Date(element.date);
          date.innerHTML = format(test, "MMMM dd, yyyy");
          date.setAttribute("class", "todoDate");
          todoContainer.appendChild(date);

          priority.innerHTML = element.priority;
          priority.setAttribute("class", "todoPriority");
          todoContainer.appendChild(priority);

          deleteButton.textContent = "DELETE";
          deleteButton.setAttribute("class", "todoDelete");
          todoContainer.appendChild(deleteButton);
          //create an event listener on the delete button
          deleteButton.addEventListener("click", initRemoveButton, false);
          //deleting function
          function initRemoveButton() {
            this.parentNode.parentNode.removeChild(this.parentNode);
            //find the index that contains the title and details related to the delete button
            //look for the index in the selected array that contains the object that corresponds to the delete button's indication
            index = projectArray[project].findIndex(
              (obj) =>
                obj.title === element.title && obj.details === element.details
            );
            //remove that index
            projectArray[project].splice(index, 1);
            //do the same for the general TodoList array
            index = TodoList.findIndex(
              (obj) =>
                obj.title === element.title && obj.details === element.details
            );
            //remove that index
            TodoList.splice(index, 1);
            localStorage.setItem("TodoList", JSON.stringify(TodoList));
            console.log(TodoList);
            // // console.log(JSON.parse(localStorage.getItem("projectArray")));
            console.log(projectArray);
            localStorage.setItem("projectArray", JSON.stringify(projectArray));
          }
        }
      });
    }
  });
};

export { addDivsForProjects };
