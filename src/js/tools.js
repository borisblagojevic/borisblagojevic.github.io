export default async function renderToolsSection() {
	try {
		const response = await fetch('/tools/tools.json');
		if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

		const tools = await response.json();

		const fragment = document.createDocumentFragment();

		tools.forEach(toolData => {
			const img = document.createElement('img');
			img.className = 'tool';
			img.src = toolData.src;
			img.alt = toolData.alt;
			img.title = toolData.title;
			fragment.appendChild(img);

			img.addEventListener('click', () => {alert(toolData.title)})
		});

		const root = document.getElementById('Tools');
		root.appendChild(fragment);

	} catch (error) {
		console.error('Failed to load tools section:', error);
	}
}