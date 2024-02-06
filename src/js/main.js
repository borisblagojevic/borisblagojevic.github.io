import {bih, eng} from "./textData.js";
import typingAnimation from "./typingAnimation.js";

const btnENG = document.querySelector(".user-eng");
const btnBIH = document.querySelector(".user-bih");

// elements to change
const navLink = document.querySelectorAll(".navigation__link");
const heroTitle = document.querySelector(".hero__title");
const aboutBox = document.querySelectorAll(".about__item");
const cvSection = document.querySelector(".cv__subtitle");
const toolsSection = document.querySelector(".tools__title");
const contactSection = document.querySelector(".contact__title");
const mainTitle = document.querySelector('title');
const skipNavEL = document.querySelector('.skip-nav-link');

// projects
const projectBox = document.querySelector(".projects__box");
const projectTitle = document.querySelector(".project__title");

// LANGUAGE SETTINGS ************************************************
const changeLanguage = function (storedLng) {
    let lang;

    // header
    if (storedLng === "eng")
    {
        lang = eng;

        btnENG.classList.add("active-language")
    }
    else
    {
        lang = bih;

        btnBIH.classList.add("active-language");
    }

    mainTitle.innerHTML = lang.mainTitle;

    skipNavEL.innerHTML = lang.skipNav;

    navLink.forEach((el, i) => {
        if (i > 1)
        {
            el.innerHTML = lang.navigationItem[i - 2];
        }
    });

    heroTitle.innerHTML = `${lang.headerTitle[0]} <span class="hero__span">${lang.headerTitle[1]}</span>`;

    aboutBox.forEach((el, i) => (el.innerHTML = lang.aboutSection[i]));

    cvSection.innerHTML = lang.cvSection;

    toolsSection.innerHTML = lang.toolsSection;

    contactSection.innerHTML = lang.contactSection;

    projectTitle.innerHTML = lang.projectTitle;

    while (projectBox.firstChild) projectBox.removeChild(projectBox.firstChild);

    lang.projects.forEach((project) => {
        if (project.img.endsWith(".webm"))
        {
            createHTMLVid(projectBox, project);
        }
        else
        {
            createHTMLIMG(projectBox, project);
        }
    });
};

const createHTMLVid = (element, data) => {
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
              <video alt="${data.btn_title}"
              class="project__right hero__right project__todo-img"
              autoplay loop muted playsinline
              poster="src/images/favicon/bbFavicon.svg"
              >
                <source src="${data.img}" type="video/webm">
                This video is not supported on your browser!
              </video>
          </div>
  `;

    element.insertAdjacentHTML("beforeend", html);
};

const createHTMLIMG = (element, data) => {
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
              		<img src="${data.img}" alt="${data.btn_title}"  loading="lazy"
					class="project__right hero__right project__todo-img"/>
			</picture>
          </div>
  `;

    element.insertAdjacentHTML("beforeend", html);
};

const languageBtn = function (el) {
    btnENG.classList.remove("active-language");
    btnBIH.classList.remove("active-language");

    let chosenLang;

    if (el.target.classList[1] === "user-eng")
    {
        chosenLang = "eng";

        localStorage.setItem("language", JSON.stringify("eng"));
    }
    else
    {
        chosenLang = "bih";

        localStorage.setItem("language", JSON.stringify("bih"));
    }

    changeLanguage(chosenLang)
};

btnENG.addEventListener("click", languageBtn.bind(btnENG));
btnBIH.addEventListener("click", languageBtn.bind(btnBIH));

// date **********************************************************

const crNumber = document.querySelector(".crNumber");

crNumber.innerHTML = new Date().getFullYear();

// menu ***************************************************
const btnMenuMobile = document.querySelector(".menu-mobile");
const btnMenuClose = document.querySelector(".menu-close");
const menuDesktop = document.querySelector(".desktop");
const heroContent = document.querySelector(".hero__content");
const hero = document.querySelector(".hero");

const toggleDisplay = function (el, reverse = false) {
    if (!reverse)
    {
        if (el.style.display === "none" || el.style.display === "")
        {
            el.style.display = "flex";
        }
        else
        {
            el.style.display = "none";
        }
    }
    else
    {
        if (el.style.display === "flex" || el.style.display === "")
        {
            el.style.display = "none";
        }
        else
        {
            el.style.display = "flex";
        }
    }
};

const callDisplayFunctions = function (open = true) {
    toggleDisplay(menuDesktop, open === true);
    toggleDisplay(btnMenuClose, open === true);

    if (open)
    {
        hero.style.height = "100vh";
    }
    else
    {
        hero.style.height = "100vh";
        hero.style.paddingBottom = "10%";
    }

    toggleDisplay(btnMenuMobile, open !== true);
    toggleDisplay(heroContent, open !== true);

    menuDesktop.classList.toggle("mobile-menu");
};

btnMenuMobile.addEventListener("click", callDisplayFunctions);

btnMenuClose.addEventListener("click", () => callDisplayFunctions(false));

// init ******************************************************
changeLanguage(JSON.parse(localStorage.getItem("language")) || "eng");
toggleDisplay(btnMenuClose, true);
typingAnimation();