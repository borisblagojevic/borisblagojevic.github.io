const loaderContainer = document.querySelector(".loader-container");
let firstLoaded = false;

export function showLoader() {
	loaderContainer.classList.remove("loader-container--hidden");

	document.body.style.overflowY = "hidden";
}

export function hideLoader() {
	if (loaderContainer.classList.contains("loader-container--hidden")) return;

	setTimeout(function () {
		document.body.style.overflowY = "auto";

		loaderContainer.classList.add("loader-container--hidden");

		if (firstLoaded)
			loaderContainer.classList.add("loader-transparent");

		if (!firstLoaded)
			firstLoaded = true;
	}, 100)
}
