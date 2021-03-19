(function () {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
  }

  function checkPositionAbout() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add("content-animation");
        document.getElementById("content-2").classList.add("content-2-anim");
        document.getElementById("content-3").classList.add("content-3-anim");
      }
    }
  }

  window.addEventListener("scroll", checkPositionAbout);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();
