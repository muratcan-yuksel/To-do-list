const modal = (() => {
  // Get the modal
  var modal = document.getElementById("myModal");

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

  return { btnClick, spanClick, windowClick };
})();
//this is the shortcut function that'll be called in index.js
const modalShortCut = () => {
  modal.btnClick();
  modal.spanClick();
  modal.windowClick();
};

export { modal, modalShortCut };
