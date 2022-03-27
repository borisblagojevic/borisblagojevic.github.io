import { bih, eng } from "./textData.js";

// LANGUAGE SETTINGS ************************************************8
const navBar = document.querySelector(".navigation__links-list--left");
const btnENG = document.querySelector(".user-eng");
const btnBIH = document.querySelector(".user-bih");

// elements to change
const navLink = document.querySelectorAll(".navigation__link");
const heriTitle = document.querySelector(".hero__title");
const aboutBox = document.querySelectorAll(".about__item");
const cvSection = document.querySelector(".cv__subtitle");
const toolsSection = document.querySelector(".tools__title");
const contactSection = document.querySelector(".contact__title");
const projectSection = document.querySelector(".project__title");

let stateLang = JSON.parse(localStorage.getItem("language")) || eng;

const changeLanguage = function (lang) {
  // header
  lang.lang === "eng"
    ? btnENG.classList.add("active-language")
    : btnBIH.classList.add("active-language");

  navLink.forEach((el, i) => {
    if (i > 1) el.innerHTML = lang.navigationItem[i - 2];
  });

  heriTitle.innerHTML = `${lang.headerTitle[0]} <span class="hero__span">${lang.headerTitle[1]}</span>`;

  // about
  aboutBox.forEach((el, i) => (el.innerHTML = lang.aboutSection[i]));

  // cv section
  cvSection.innerHTML = lang.cvSection;

  // tools
  toolsSection.innerHTML = lang.toolsSection;

  // contact
  contactSection.innerHTML = lang.contactSection;

  // project
  projectSection.innerHTML = lang.projects;
};

const languageBtn = function (el) {
  btnENG.classList.remove("active-language");
  btnBIH.classList.remove("active-language");

  if (el.target.classList[1] === "user-eng")
    localStorage.setItem("language", JSON.stringify(eng));
  else localStorage.setItem("language", JSON.stringify(bih));

  // refresh the page
  window.location.reload();
};

// if (stateLang) {
//   console.log(true);
// }

btnENG.addEventListener("click", languageBtn.bind(btnENG));
btnBIH.addEventListener("click", languageBtn.bind(btnBIH));

// *************************************************

// CAROUSEL *******************************************
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
document.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (e.key === "ArrowLeft") left();
  if (e.key === "ArrowRight") right();
});

// date **********************************************************

const crNumber = document.querySelector(".crNumber");
const date = new Date();
crNumber.innerHTML = date.getFullYear();

// init ******************************************************
translate(position);
changeLanguage(stateLang);
