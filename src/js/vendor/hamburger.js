// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector("#menu");
var main = document.querySelector("#main");
var header = document.querySelector("#header");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("open");
  main.classList.toggle("open");
  if (header) {
    header.classList.toggle("open");
  }
});
