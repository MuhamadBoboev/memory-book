"use strict";
const burger = document.querySelector(".burger");
const body = document.body;
let headerLogo = document.querySelector("[data-header-logo]");

burger.addEventListener("click", function () {
  let mainNav = document.querySelector(".header__menu");
  let burgerSpan = document.querySelector(".burger::after");

  // headerLogo.classList.toggle("active");
  mainNav.classList.toggle("active");
  burger.classList.toggle("active");
  body.classList.toggle("lock");
});

const itemNav = document.querySelectorAll(".manu__item");
itemNav.forEach(function (event) {
  event.addEventListener("click", function (on) {
    body.classList.remove("lock");
    let mainNav = document.querySelector(".header__menu");
    mainNav.classList.remove("active");
    burger.classList.remove("active");
    headerLogo.classList.remove("active");
  });
});
/* ************** scroll ************** */
const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

let lastScrollTop = 100;

window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance > lastScrollTop) {
    header.classList.add("header_hidden");
  } else {
    header.classList.remove("header_hidden");
  }

  if (scrollDistance === 0) {
    header.classList.remove("header_hidden");
  }

  lastScrollTop = scrollDistance;
});
