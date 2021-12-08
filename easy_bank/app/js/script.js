const hamburgerBtn = document.querySelector("#hamburgerBtn");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

hamburgerBtn.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    fadeElements.forEach((el) => {
      header.classList.remove("open");
      el.classList.remove("fade-in");
      el.classList.add("fade-out");
      body.classList.remove("no-scroll");
    });
  } else {
    header.classList.add("open");
    fadeElements.forEach((el) => {
      el.classList.remove("fade-out");
      el.classList.add("fade-in");
      body.classList.add("no-scroll");
    });
  }
});
