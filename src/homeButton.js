import { container, TodoList, projectArray } from './index';

const displayHomeButton = (() => {
  // get the projects in the side bar
  const sideBarProjects = document.getElementById('sideBar');
  // create a button named "Home"
  const homeButton = document.createElement('BUTTON');
  homeButton.setAttribute('class', 'project');
  homeButton.setAttribute('id', 'homeButton');
  homeButton.textContent = 'Home';
  sideBarProjects.appendChild(homeButton);
  // element.parentNode.insertBefore(newElement, element.nextSibling);

  homeButton.addEventListener('click', (e) => {
    // all the projects displayed on the page will be deleted
    document.querySelectorAll('.projectDelete').forEach((e) => e.remove());
    document.querySelectorAll('.todoContainer').forEach((e) => e.remove());
    for (const project in projectArray) {
      // this is an array
      console.log(projectArray[project]);
      // so that means I can loop through it with forEach
      projectArray[project].forEach((element, index) => {
        // create a container
        const todoContainer = document.createElement('DIV');
        // give it a classname
        todoContainer.setAttribute('class', 'todoContainer');
        // append it to the container from index.js
        container().appendChild(todoContainer);
        // Create elements
        const title = document.createElement('DIV');
        const details = document.createElement('DIV');
        const toolTip = document.createElement('SPAN');
        const date = document.createElement('DIV');
        const priority = document.createElement('DIV');
        const deleteButton = document.createElement('BUTTON');
        // set their attributes for identification and append them to the todo container Div

        title.textContent = element.title;
        title.setAttribute('class', 'todoTitle');
        todoContainer.appendChild(title);

        details.textContent = 'Details';
        details.setAttribute('class', 'todoDetails');
        todoContainer.appendChild(details);

        toolTip.textContent = element.details;
        toolTip.setAttribute('class', 'toolTipText');
        details.appendChild(toolTip);

        // format date using date-fns package
        const format = require('date-fns/format');
        const test = new Date(element.date);
        date.innerHTML = format(test, 'MMMM dd, yyyy');
        date.setAttribute('class', 'todoDate');
        todoContainer.appendChild(date);

        priority.innerHTML = element.priority;
        priority.setAttribute('class', 'todoPriority');
        todoContainer.appendChild(priority);

        deleteButton.textContent = 'DELETE';
        deleteButton.setAttribute('class', 'todoDelete');
        todoContainer.appendChild(deleteButton);
        // create an event listener on the delete button
        deleteButton.addEventListener('click', initRemoveButton, false);
        // deleting function
        function initRemoveButton() {
          this.parentNode.parentNode.removeChild(this.parentNode);
          // find the index that contains the title and details related to the delete button
          // look for the index in the selected array that contains the object that corresponds to the delete button's indication
          index = projectArray[project].findIndex(
            (obj) => obj.title === element.title && obj.details === element.details,
          );
          // remove that index
          projectArray[project].splice(index, 1);
          // do the same for the general TodoList array
          index = TodoList.findIndex(
            (obj) => obj.title === element.title && obj.details === element.details,
          );
          // remove that index
          TodoList.splice(index, 1);
          localStorage.setItem('TodoList', JSON.stringify(TodoList));
          console.log(TodoList);
          // // console.log(JSON.parse(localStorage.getItem("projectArray")));
          console.log(projectArray);
          localStorage.setItem('projectArray', JSON.stringify(projectArray));
        }
      });
    }
  });
})();
