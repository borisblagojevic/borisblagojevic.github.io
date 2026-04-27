const loaderContainer = document.querySelector(".loader-container");
let firstLoaded = false;

export function showLoader() {
	loaderContainer.classList.remove("loader-container--hidden");
}

export function hideLoader() {
	if (loaderContainer.classList.contains("loader-container--hidden")) return;

	console.log(firstLoaded);
	loaderContainer.classList.add("loader-container--hidden");

	if (firstLoaded)
		loaderContainer.classList.add("loader-transparent");

	if (!firstLoaded)
		firstLoaded = true;
}
