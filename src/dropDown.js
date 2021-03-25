import { container, TodoList, projectArray } from './index';
import { getInput } from './getInput';

// function that will be called in index.js
// it cretes dropdown menu projects
const addDropDown = () => {
  // create an option element
  const option = document.createElement('OPTION');
  // its value comes from the text input of projects
  option.setAttribute('value', getInput.getProjectInput());
  option.textContent = getInput.getProjectInput();
  // get the container to append the above option
  const optionCOntainer = document.getElementById('projectAddTodo');
  optionCOntainer.appendChild(option);
};
const localDropDown = () => {
  for (const keys in projectArray) {
    // create an option element
    const option = document.createElement('OPTION');
    // its value comes from the text input of projects
    option.setAttribute('value', keys);
    option.textContent = keys;
    // get the container to append the above option
    const optionCOntainer = document.getElementById('projectAddTodo');
    optionCOntainer.appendChild(option);
  }
};

export { addDropDown, localDropDown };
