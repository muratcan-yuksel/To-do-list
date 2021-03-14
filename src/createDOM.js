import { Todo, newTodo } from "./createTodo";
import { container, TodoList, projectArray } from "./index";

//Gets the user input (value) and exports it
const getInput = (() => {
  const getTitle = () => {
    return document.getElementById("title").value;
  };
  const getDetails = () => {
    return document.getElementById("details").value;
  };

  const getDate = () => {
    return document.getElementById("date").value;
  };

  const getPriority = () => {
    return document.querySelector('input[name="priority"]:checked').value;
  };
  //get the input from project
  const getProjectInput = () => {
    return document.getElementById("projectAdd").value;
  };
  //get the input from project drop down menu
  const getDropDown = () => {
    const input = document.getElementById("projectAddTodo");
    return input.options[input.selectedIndex].text;
  };

  return {
    getTitle,
    getDetails,
    getDate,
    getPriority,
    getProjectInput,
    getDropDown,
  };
})();

//creates Divs and writes the user input into the DOM
const addDivs = () => {
  //create a todo container
  //the reason to do this is to be able to delete a singular to do element
  const todoContainer = document.createElement("DIV");
  //give it a classname
  todoContainer.setAttribute("class", "todoContainer");
  //append it to the container from index.js
  container().appendChild(todoContainer);
  //Create elements
  const checkBox = document.createElement("INPUT");
  const title = document.createElement("DIV");
  const details = document.createElement("DIV");
  const date = document.createElement("DIV");
  const priority = document.createElement("DIV");
  const deleteButton = document.createElement("BUTTON");
  // set their attributes for identification and append them to the todo container Div
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("class", "todoCheck");
  todoContainer.appendChild(checkBox);

  title.textContent = getInput.getTitle();
  title.setAttribute("class", "todoTitle");
  todoContainer.appendChild(title);

  details.textContent = getInput.getDetails();
  details.setAttribute("class", "todoDetails");
  todoContainer.appendChild(details);

  date.innerHTML = getInput.getDate();
  date.setAttribute("class", "todoDate");
  todoContainer.appendChild(date);

  priority.innerHTML = getInput.getPriority();
  priority.setAttribute("class", "todoPriority");
  todoContainer.appendChild(priority);

  deleteButton.textContent = "DELETE";
  deleteButton.setAttribute("class", "todoDelete");
  todoContainer.appendChild(deleteButton);
  //a deleteing module to keep things just a bit tidier
  const deleteModule = (() => {
    //add an event listener to the delete button
    //so that it can delete the todo from the DOM
    deleteButton.addEventListener("click", initRemoveButton, false);
    //delete its parent element
    function initRemoveButton() {
      this.parentNode.parentNode.removeChild(this.parentNode);
      console.log(TodoList);
      //the below function finds the deleted todo's index in the array, and removes it
      // I couldn't think of a way to implement this in the creaTodo.js
      let index = TodoList.findIndex(
        (obj) =>
          obj.title === title.textContent && obj.details === details.textContent
      );
      //remove that index
      TodoList.splice(index, 1);

      //this function deletes the same element from the created array in projectArray object too
      for (let project in projectArray) {
        // console.log("new thing " + projectArray[project]);
        let index = projectArray[project].findIndex(
          (obj) =>
            obj.title === title.textContent &&
            obj.details === details.textContent
        );
        //remove that index
        projectArray[project].splice(index, 1);
      }
    }
  })();
};
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
      projectArray[projectPush[i].textContent] = [];
    }
  });
})();
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
    //the following function loops through the project array and finds the individual objects inside of it
    for (let project in projectArray) {
      // console.log(projectArray[project]);
      //create a todo container
      //the reason to do this is to be able to delete a singular to do element
      for (let i = 0; i < projectArray[project].length; i++) {
        if (event.target.textContent === projectArray[project][i].project) {
          const todoContainer = document.createElement("DIV");
          //give it a classname
          todoContainer.setAttribute("class", "todoContainer");
          //append it to the container from index.js
          container().appendChild(todoContainer);
          console.log(projectArray[project][i].title);

          //Create elements
          const checkBox = document.createElement("INPUT");
          const title = document.createElement("DIV");
          const details = document.createElement("DIV");
          const date = document.createElement("DIV");
          const priority = document.createElement("DIV");
          const deleteButton = document.createElement("BUTTON");
          // set their attributes for identification and append them to the todo container Div
          checkBox.setAttribute("type", "checkbox");
          checkBox.setAttribute("class", "todoCheck");
          todoContainer.appendChild(checkBox);

          title.textContent = projectArray[project][i].title;
          title.setAttribute("class", "todoTitle");
          todoContainer.appendChild(title);

          details.textContent = projectArray[project][i].details;
          details.setAttribute("class", "todoDetails");
          todoContainer.appendChild(details);

          date.innerHTML = projectArray[project][i].date;
          date.setAttribute("class", "todoDate");
          todoContainer.appendChild(date);

          priority.innerHTML = projectArray[project][i].priority;
          priority.setAttribute("class", "todoPriority");
          todoContainer.appendChild(priority);

          deleteButton.textContent = "DELETE";
          deleteButton.setAttribute("class", "todoDelete");
          todoContainer.appendChild(deleteButton);
          //
          const deleteModule = (() => {
            //add an event listener to the delete button
            //so that it can delete the todo from the DOM
            deleteButton.addEventListener("click", initRemoveButton, false);
            //delete its parent element
            function initRemoveButton() {
              this.parentNode.parentNode.removeChild(this.parentNode);
              console.log(TodoList);
              //the below function finds the deleted todo's index in the array, and removes it
              // I couldn't think of a way to implement this in the creaTodo.js
              let index = TodoList.findIndex(
                (obj) =>
                  obj.title === projectArray[project][i].title.textContent &&
                  obj.details === projectArray[project][i].details.textContent
              );
              //remove that index
              TodoList.splice(index, 1);

              //this function deletes the same element from the created array in projectArray object too

              // console.log("new thing " + projectArray[project]);
              let index = projectArray[project].findIndex(
                (obj) =>
                  obj.title === projectArray[project][i].title.textContent &&
                  obj.details === projectArray[project][i].details.textContent
              );
              //remove that index
              projectArray[project].splice(index, 1);

              console.log(TodoList);
            }
          })();
        }
      }
    }
  });
};

export { getInput, addDivs, addProjects, addDivsForProjects };
