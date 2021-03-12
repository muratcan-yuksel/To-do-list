//Function that adds individual To-dos
const modal = (() => {
  // Get the modal
  var modal = document.getElementById("myModal");
  //this will be used in index js directly to close the window on to do add
  var modal2 = () => {
    return document.getElementById("myModal");
  };

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  const btnClick = () => {
    btn.onclick = function () {
      modal.style.display = "block";
    };
  };

  // When the user clicks on <span> (x), close the modal
  const spanClick = () => {
    span.onclick = function () {
      modal.style.display = "none";
    };
  };

  // When the user clicks anywhere outside of the modal, close it
  const windowClick = () => {
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  };

  return { btnClick, spanClick, windowClick, modal2 };
})();
//this is the shortcut function that'll be called in index.js
const modalShortCut = () => {
  modal.btnClick();
  modal.spanClick();
  modal.windowClick();
};

//function that adds project
const addProject = (() => {
  const btn = document.getElementById("projectButton");
  // Get the modal
  var modal = document.getElementById("myModal2");
  //this will be used in index js directly to close the window on to do add
  var modal2 = () => {
    return document.getElementById("myModal2");
  };

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  const btnClick = () => {
    btn.onclick = function () {
      modal.style.display = "block";
    };
  };

  // When the user clicks on <span> (x), close the modal
  const spanClick = () => {
    // span.onclick = function () {
    //   modal.style.display = "none";
    // };
  };

  // When the user clicks anywhere outside of the modal, close it
  const windowClick = () => {
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  };

  return { btnClick, spanClick, windowClick, modal2 };
})();

const projectModalShortCut = () => {
  addProject.btnClick();
  addProject.spanClick();
  addProject.windowClick();
};

export { modal, modalShortCut, addProject, projectModalShortCut };
