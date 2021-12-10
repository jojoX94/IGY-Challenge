console.log("hey");
const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElt = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    body.classList.remove("no-scroll");
    header.classList.remove("open");
    fadeElt.forEach(function (elt) {
      elt.classList.remove("fade-in");
      elt.classList.add("fade-out");
    });
  } else {
    body.classList.add("no-scroll");
    header.classList.add("open");
    fadeElt.forEach(function (elt) {
      elt.classList.remove("fade-out");
      elt.classList.add("fade-in");
    });
  }
});
