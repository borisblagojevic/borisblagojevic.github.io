import { bih, eng } from "./textData.js";

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
const projectBox = document.querySelector(".projects__box");
const projectTitle = document.querySelector(".project__title");
const projectSubtitles = document.querySelectorAll(".project__subtitle");
const projectParagraph = document.querySelectorAll(".project__paragraph");
const projectImgs = document.querySelectorAll(".project__right");
const projectLink = document.querySelectorAll(".project__link");

let stateLang = JSON.parse(localStorage.getItem("language")) || eng;

// LANGUAGE SETTINGS ************************************************8

const changeLanguage = function (lang) {
  // header
  lang.lang === "eng"
    ? btnENG.classList.add("active-language")
    : btnBIH.classList.add("active-language");

  // cv
  // lang.lang === "eng"
  //   ? (btnCV.href = "src/cv/cvBorisBlagojevicEng.pdf")
  //   : (btnCV.href = "src/cv/cvBorisBlagojevicBIH.pdf");

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

  while (projectBox.firstChild) projectBox.removeChild(projectBox.firstChild);
  lang.projects.forEach((project) => createHTML(projectBox, project));
};

const createHTML = (element, data) => {
  const html = `
          <div class="project">
            <div class="project_inner project__left">
              <h2 class="subtitle project__subtitle">${data.title}</h2>
              <p class="paragraph project__paragraph">
                ${data.info}
              </p>
              <a
                href="${data.github}"
                target="_blank"
                class="project__link"
                >${data.btn_title}</a
              >
            </div>
            <img src="${data.img}" alt="${data.btn_title} image" 
              class="project__right hero__right project__todo-img"
            ></img>
          </div>
  `;

  element.insertAdjacentHTML("beforeend", html);
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

// date **********************************************************

const crNumber = document.querySelector(".crNumber");
const date = new Date();
crNumber.innerHTML = date.getFullYear();

// menu ***************************************************
const btnMenuMobile = document.querySelector(".menu-mobile");
const btnMenuClose = document.querySelector(".menu-close");
const menuDesktop = document.querySelector(".desktop");
const heroContent = document.querySelector(".hero__content");
const hero = document.querySelector(".hero");

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

const callDisplayFunctions = function (open = true) {
  toggleDisplay(menuDesktop, open === true ? true : false);
  toggleDisplay(btnMenuClose, open === true ? true : false);

  if (open) hero.style.height = "100vh";
  else {
    hero.style.height = "100vh";
    hero.style.paddingBottom = "10%";
  }

  toggleDisplay(btnMenuMobile, open === true ? false : true);
  toggleDisplay(heroContent, open === true ? false : true);

  menuDesktop.classList.toggle("mobile-menu");
};

btnMenuMobile.addEventListener("click", callDisplayFunctions);

btnMenuClose.addEventListener("click", () => callDisplayFunctions(false));
// init ******************************************************
// translate(position);
changeLanguage(stateLang);
toggleDisplay(btnMenuClose, true);
// localStorage.clear();
