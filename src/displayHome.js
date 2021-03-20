import { Todo, newTodo } from "./createTodo";
import { container, TodoList, projectArray } from "./index";
import { getInput } from "./getInput";
import { addProjects } from "./addProjects";
import { addDivs } from "./addDivs";
import { displayProjects } from "./displayProjects";
import { addDivsForProjects } from "./addDivsForProjects";
import { addDropDown, localDropDown } from "./dropDown";
import { deleteProjects } from "./deleteProjects";

const displayHome = () => {
  for (let project in projectArray) {
    //this is an array
    console.log(projectArray[project]);
    //so that means I can loop through it with forEach
    projectArray[project].forEach((element, index) => {
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
      const popUp = document.createElement("SPAN");
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

      details.textContent = "Click to see details";
      details.setAttribute("class", "todoDetails");
      todoContainer.appendChild(details);

      popUp.textContent = element.details;
      popUp.setAttribute("class", "popuptext");
      details.appendChild(popUp);

      date.innerHTML = element.date;
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
    });
  }
};
export { displayHome };
