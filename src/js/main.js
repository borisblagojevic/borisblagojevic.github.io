// import bih from "textData.js";

const carousel = document.querySelectorAll(".project__box");
const carouselLinks = document.querySelectorAll(".project__link");
const btnLeft = document.querySelector(".projects__left");
const btnRight = document.querySelector(".projects__right");
let position = 0;

const translateEl = function (el, value) {
  el.forEach(
    (el, i) => (el.style.transform = `translateX(${200 * (i - value)}%)`)
  );
};

const translate = function (value) {
  translateEl(carousel, value);
  translateEl(carouselLinks, value);
};

const right = function () {
  if (position === carousel.length - 1) position = 0;
  else position++;

  translate(position);
};

const left = function () {
  if (position === 0) position = carousel.length - 1;
  else position--;

  translate(position);
};

btnLeft.addEventListener("click", left);
btnRight.addEventListener("click", right);

// init
translate(position);

// date

const crNumber = document.querySelector(".crNumber");
const date = new Date();
crNumber.innerHTML = date.getFullYear();
