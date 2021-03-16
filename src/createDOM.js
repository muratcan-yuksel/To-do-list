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
      localStorage.setItem("projectArray", JSON.stringify(projectArray));
    }
  });
})();
const displayProjects = () => {
  let projects = document.querySelectorAll(".project");
  for (let k in JSON.parse(localStorage.getItem("projectArray"))) {
    console.log("ooooh");
  }
};
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
        console.log(element);
        //if the selected projects name corresponds to that of the selected array's...
        if (
          event.target.textContent === element.project ||
          event.target.textContent === "Home"
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

          details.textContent = element.details;
          details.setAttribute("class", "todoDetails");
          todoContainer.appendChild(details);

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

            console.log(TodoList);
            console.log(projectArray);
            console.log(projectArray[project]);
          }
        }
      });
    }
  });
};
// function that will be called in index.js
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

const displayHome = () => {
  //get the projects in the side bar
  const sideBarProjects = document.getElementById("projects");
  //create a button named "Home"
  const homeButton = document.createElement("BUTTON");
  homeButton.setAttribute("class", "project");
  homeButton.textContent = "Home";
  sideBarProjects.appendChild(homeButton);

  homeButton.addEventListener("click", (e) => {
    console.log(TodoList);
    TodoList.forEach((element, index) => {
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

      details.textContent = element.details;
      details.setAttribute("class", "todoDetails");
      todoContainer.appendChild(details);

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
      //deleteButton.addEventListener("click", initRemoveButton, false);
    });
  });
};
//this part might be totally useles
//won't I already save things with local storage?
// const displayProjects=()=>{
//   //get the projects in the side bar
//   const sideBarProjects= document.getElementById("projects");
//   //get the div that takes the project names dynamically
//   const projectsDiv= document.getElementById("projectAddTodo");
//   for (i=0; i< projectsDiv.length; i++){
//     const newProject = document.createElement("BUTTON");
//       newProject.setAttribute("class", "project");
//        newProject.textContent = getInput.getProjectInput();

//   //     //adds a new project under the projects div on click
//   // button.addEventListener("click", function (e) {
//   //   const newProject = document.createElement("BUTTON");
//   //   newProject.setAttribute("class", "project");
//   //   newProject.textContent = getInput.getProjectInput();
//   //   //projectArray.push([getInput.getProjectInput()]);
//   //   projectsDiv.appendChild(newProject);
//   }
// }
export {
  getInput,
  addDivs,
  addProjects,
  addDivsForProjects,
  addDropDown,
  displayHome,
  displayProjects,
};
