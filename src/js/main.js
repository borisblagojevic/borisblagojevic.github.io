import typingAnimation from "./typingAnimation.js";
import "../sass/main.scss";
import initLanguages from "./i10n";

// back to the top arrow
const backToTop = document.querySelector(".back-to-top");
const sentinelElement = document.querySelector("#scroll-sentinel");

const crNumber = document.querySelector(".crNumber");

crNumber.innerHTML = new Date().getFullYear();

// menu ***************************************************
const btnMenuMobile = document.querySelector(".menu-mobile");
const btnMenuClose = document.querySelector(".menu-close");
const menuDesktop = document.querySelector(".desktop");
const heroContent = document.querySelector(".hero__content");
const hero = document.querySelector(".hero");

const toggleDisplay = function (el, reverse = false) {
	if (!reverse) {
		if (el.style.display === "none" || el.style.display === "") {
			el.style.display = "flex";
		} else {
			el.style.display = "none";
		}
	} else {
		if (el.style.display === "flex" || el.style.display === "") {
			el.style.display = "none";
		} else {
			el.style.display = "flex";
		}
	}
};

const callDisplayFunctions = function (open = true) {
	toggleDisplay(menuDesktop, open === true);
	toggleDisplay(btnMenuClose, open === true);

	if (open) {
		hero.style.height = "100vh";
	} else {
		hero.style.height = "100vh";
		hero.style.paddingBottom = "10%";
	}

	toggleDisplay(btnMenuMobile, open !== true);
	toggleDisplay(heroContent, open !== true);

	menuDesktop.classList.toggle("mobile-menu");
};

btnMenuMobile.addEventListener("click", callDisplayFunctions);

btnMenuClose.addEventListener("click", () => callDisplayFunctions(false));

const options = {
	root: null,
	rootMargin: "-20% 0% 0% 0%",
	threshold: 0,
};

const callback = (entries, observer) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			backToTop.classList.remove("hidden");
		} else {
			backToTop.classList.add("hidden");
		}
	});
};

const observer = new IntersectionObserver(callback, options);
observer.observe(sentinelElement);

initLanguages();
toggleDisplay(btnMenuClose, true);
typingAnimation();
