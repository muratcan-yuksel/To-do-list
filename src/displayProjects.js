const displayProjects = () => {
  const projectsDiv = document.querySelector('#projects');
  // why's this here?
  // let projects = document.querySelectorAll(".project");
  for (const keys in JSON.parse(localStorage.getItem('projectArray'))) {
    if (keys != 'Home') {
      const newProject = document.createElement('BUTTON');
      newProject.setAttribute('class', 'project');
      newProject.textContent = keys;
      projectsDiv.appendChild(newProject);
    }
  }
};
export { displayProjects };
