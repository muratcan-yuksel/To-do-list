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

export { getInput };
