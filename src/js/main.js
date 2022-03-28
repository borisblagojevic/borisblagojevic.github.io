import { bih, eng } from "./textData.js";

// LANGUAGE SETTINGS ************************************************8
const navBar = document.querySelector(".navigation__links-list--left");
const btnENG = document.querySelector(".user-eng");
const btnBIH = document.querySelector(".user-bih");
const btnCV = document.querySelector(".btn--cv");

// elements to change
const navLink = document.querySelectorAll(".navigation__link");
const heriTitle = document.querySelector(".hero__title");
const aboutBox = document.querySelectorAll(".about__item");
const cvSection = document.querySelector(".cv__subtitle");
const toolsSection = document.querySelector(".tools__title");
const contactSection = document.querySelector(".contact__title");

// projects
const projectTitle = document.querySelector(".project__title");
const projectSubtitles = document.querySelectorAll(".project__subtitle");
const projectParagraph = document.querySelectorAll(".project__paragraph");
const projectImgs = document.querySelectorAll(".project__right");
const projectLink = document.querySelectorAll(".project__link");

let stateLang = JSON.parse(localStorage.getItem("language")) || eng;

const changeLanguage = function (lang) {
  // header
  lang.lang === "eng"
    ? btnENG.classList.add("active-language")
    : btnBIH.classList.add("active-language");

  // cv
  lang.lang === "eng"
    ? (btnCV.href = "/cvBorisBlagojevicEng.pdf")
    : (btnCV.href = "/cvBorisBlagojevicBIH.pdf");

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
  projectTitle.innerHTML = lang.projectTitle;

  projectSubtitles.forEach((el, i) => (el.innerHTML = lang.projects[i][0]));

  projectParagraph.forEach((el, i) => (el.innerHTML = lang.projects[i][1]));

  projectLink.forEach((el) => (el.innerHTML = lang.projects[0][3]));

  projectImgs.forEach(
    (el, i) => (el.style.backgroundImage = `url('${lang.projects[i][2]}')`)
  );
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

btnENG.addEventListener("click", languageBtn.bind(btnENG));
btnBIH.addEventListener("click", languageBtn.bind(btnBIH));

// *************************************************

// CAROUSEL *******************************************
// const carousel = document.querySelectorAll(".project__box");
// const carouselLinks = document.querySelectorAll(".project__link");
// const btnLeft = document.querySelector(".projects__left");
// const btnRight = document.querySelector(".projects__right");
// let position = 0;

// const translateEl = function (el, value) {
//   el.forEach(
//     (el, i) => (el.style.transform = `translateX(${200 * (i - value)}%)`)
//   );
// };

// const translate = function (value) {
//   translateEl(carousel, value);
//   translateEl(carouselLinks, value);
// };

// const right = function () {
//   if (position === carousel.length - 1) position = 0;
//   else position++;

//   translate(position);
// };

// const left = function () {
//   if (position === 0) position = carousel.length - 1;
//   else position--;

//   translate(position);
// };

// btnLeft.addEventListener("click", left);
// btnRight.addEventListener("click", right);
// document.addEventListener("keydown", function (e) {
//   e.preventDefault();
//   if (e.key === "ArrowLeft") left();
//   if (e.key === "ArrowRight") right();
// });

// date **********************************************************

const crNumber = document.querySelector(".crNumber");
const date = new Date();
crNumber.innerHTML = date.getFullYear();

// menu ***************************************************
const btnMenuMobile = document.querySelector(".btn--menu-mobile");
const menuDesktop = document.querySelector(".desktop");
const heroContent = document.querySelector(".hero__content");
const toggleDisplay = function (el, reverse = false) {
  if (!reverse) {
    if (el.style.display === "none" || el.style.display === "")
      el.style.display = "flex";
    else el.style.display = "none";
  } else {
    if (el.style.display === "flex" || el.style.display === "")
      el.style.display = "none";
    else el.style.display = "flex";
  }
};
btnMenuMobile.addEventListener("click", function () {
  toggleDisplay(menuDesktop);
  toggleDisplay(heroContent, true);

  menuDesktop.classList.toggle("mobile-menu");
});
// init ******************************************************
// translate(position);
changeLanguage(stateLang);

// localStorage.clear();
