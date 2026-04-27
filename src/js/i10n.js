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

const btnENG = document.querySelector(".user-en");
const btnBIH = document.querySelector(".user-bs");

const languageBtn = function (el) {
	btnENG.classList.remove("active-language");
	btnBIH.classList.remove("active-language");

	let chosenLang;
	console.log(el.target.classList[1]);
	if (el.target.classList[1] === "user-en") {
		chosenLang = "en";

		localStorage.setItem("language", JSON.stringify("en"));
	} else {
		chosenLang = "bs";

		localStorage.setItem("language", JSON.stringify("bs"));
	}

	changeLanguage(chosenLang);
};

btnENG.addEventListener("click", languageBtn.bind(btnENG));
btnBIH.addEventListener("click", languageBtn.bind(btnBIH));

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

const fetchTranslations = async (lang) => {
	showLoader();

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
	let lang;

	if (storedLng === "en") {
		lang = await fetchTranslations("en");

		btnENG.classList.add("active-language");
	} else if (storedLng === "de") {
		lang = await fetchTranslations("de");

		btnENG.classList.add("active-language");
	} else {
		lang = await fetchTranslations("bs");

		btnBIH.classList.add("active-language");
	}

	mainTitle.innerHTML = lang.mainTitle;

	skipNavEL.innerHTML = lang.skipNav;

	navLink.forEach((el, i) => {
		if (i > 1) {
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
		if (project.img.endsWith(".webm")) {
			createHTMLVid(projectBox, project);
		} else {
			createHTMLIMG(projectBox, project);
		}
	});

	hideLoader();
}

export default function initLanguages() {
	changeLanguage(JSON.parse(localStorage.getItem("language")) || "en");
}
