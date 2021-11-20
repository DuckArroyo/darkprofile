function stateChange() {
  event.preventDefault();
  var element = document.getElementById("enchilada");
  if (element.className === "dark") {
    element.setAttribute("class", "light");
  } else {
    element.setAttribute("class", "dark");
  }
}

const toggleEl = document.querySelector("#modeToggle");
toggleEl.addEventListener("click", function (e) {
  e.preventDefault();
  stateChange();
});

// =-=-=-=-=-=- Accordion -=-=-=-=-=-=-=
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
