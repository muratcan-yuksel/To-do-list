import { Todo, newTodo } from './createTodo';
import { container, TodoList, projectArray } from './index';
import { addDivs } from './addDivs';

// Gets the user input (value) and exports it
const getInput = (() => {
  const getTitle = () => {
    const title = document.getElementById('title').value;
    document.getElementById('title').value = '';
    return title;
  };
  const getDetails = () => {
    const details = document.getElementById('details').value;
    document.getElementById('details').value = '';
    return details;
  };

  const getDate = () => document.getElementById('date').value;

  const getPriority = () => document.querySelector('input[name="priority"]:checked').value;
  // get the input from project
  const getProjectInput = () => document.getElementById('projectAdd').value;
  // get the input from project drop down menu
  const getDropDown = () => {
    const input = document.getElementById('projectAddTodo');
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

export { getInput };
