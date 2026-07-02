import { hideLoader, showLoader } from "./loader";

const navLink = document.querySelectorAll(".navigation__link");
const heroTitle = document.querySelector(".hero__title");
const aboutBox = document.querySelectorAll(".about__item");
const cvSection = document.querySelector(".cv__subtitle");
const toolsSection = document.querySelector(".tools__title");
const contactSection = document.querySelector(".contact__title");
const mainTitle = document.querySelector("title");
const skipNavEL = document.querySelector(".skip-nav-link");

const projectBox = document.querySelector(".projects__box");
const projectTitle = document.querySelector(".project__title");

const lngButtons = {
	en: document.querySelector(".user-en"),
	bs: document.querySelector(".user-bs"),
	de: document.querySelector(".user-de"),
};

const languageBtn = function (el) {
	const url = new URL(window.location.href);

	Object.values(lngButtons).forEach((el) => {
		el.classList.remove("active-language");
	});

	let chosenLang;

	if (el.target.classList[1] === "user-en") {
		chosenLang = "en";
	} else if (el.target.classList[1] === "user-de") {
		chosenLang = "de";
	} else {
		chosenLang = "bs";
	}

	lngButtons[chosenLang].classList.add("active-language");
	localStorage.setItem("language", JSON.stringify(chosenLang));

	url.searchParams.set("language", chosenLang);
	window.history.pushState({}, "", url);

	changeLanguage(chosenLang);
};

Object.values(lngButtons).forEach((el) => {
	el.addEventListener("click", languageBtn.bind(el));
});

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
              poster="/images/favicon/bbFavicon.svg"
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

const fetchTranslations = async (lang) => {
	try {
		const response = await fetch(`/locals/${lang}/translation.json`);

		if (!response.ok) {
			throw new Error(`Language ${lang} not found`);
		}

		return await response.json();
	} catch (error) {
		console.error("Error loading translations:", error);

		return null;
	}
};

async function changeLanguage(storedLng) {
	showLoader();

	let lang = await fetchTranslations(storedLng);

	mainTitle.textContent = lang.mainTitle;
	skipNavEL.textContent = lang.skipNav;

	navLink.forEach((el, i) => {
		if (i > 2) {
			el.textContent = lang.navigationItem[i - 2];
		}
	});

	heroTitle.innerHTML = `${lang.headerTitle[0]} <span class="hero__span">${lang.headerTitle[1]}</span>`;

	aboutBox.forEach((el, i) => (el.innerHTML = lang.aboutSection[i]));

	cvSection.textContent = lang.cvSection;
	toolsSection.textContent = lang.toolsSection;
	contactSection.textContent = lang.contactSection;
	projectTitle.textContent = lang.projectTitle;

	while (projectBox.firstChild) projectBox.removeChild(projectBox.firstChild);

	lang.projects.forEach((project) => {
		if (project.img.endsWith(".webm")) {
			createHTMLVid(projectBox, project);
		} else {
			createHTMLIMG(projectBox, project);
		}
	});

	hideLoader();
}

export default function initLanguages() {
	const set = new Set(["en", "de", "bs"]);

	let lng = JSON.parse(localStorage.getItem("language"));

	if (!lng || !set.has(lng)) {
		const urlParams = new URLSearchParams(window.location.search);

		lng = set.has(urlParams.get("language"))
			? urlParams.get("language")
			: "en";
	}

	lngButtons[lng].classList.add("active-language");
	changeLanguage(lng);
}
