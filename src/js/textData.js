export const bih = {
	lang: "bih",
	mainTitle: 'Boris Blagojević Softverski Inženjer',
	skipNav: 'Preskoči navigaciju',
	navigationItem: ["O meni", "CV", "Alati", "Kontakt", "Projekti"],
	headerTitle: ["Zdravo, ja sam", "Boris Blagojević"],
	toolsSection: "Jezici i alati koje koristim",
	aboutSection: [
		"O meni",
		"Rođen i odrastao u Banjoj Luci.",
		"Završio sam srednju Elektrotehničku školu Nikola Tesla u Banjoj Luci kao tehničar telekomunikacija.",
		"Završio sam informatički smjer na Panevropskom Univerzitetu Apeiron u Banjoj Luci i postao sam softverski inženjer.",
		"Radio sam u <a class='about__link' href='https://develabs.com/' target='_blank'>Develabs d.o.o.</a> (partner kompanije <a class='about__link' href='https://www.jedox.com/en/' target='_blank'>Jedox A.G.</a>), gdje sam aktivno sudjelovao u razvoju EPM softvera.",
        "Zaposlen sam u <a class='about__link' href='https://www.aleapartners.io/' target='_blank'>Alea Partners d.o.o.</a> Banja Luka gdje razvijam 2D igrice"
    ],
	cvSection: "Pogledajte moj CV",
	contactSection: "Kako stupiti u kontakt sa mnom",
	projectTitle: "Projekte koje bih izdvojio",
	projects: [
		{
			title: "JOB POSTING WEB APP",
			info:
				"Veb aplikacija za oglasne poslove napravljena uz pomoć ReactJS, TailwindCSS i JAVA tehnologija. Back-end se pokreće na Tomcat-u a podaci se čuvaju u MySQL RDBMS. Svi servisi su kontejnerizovani pomoću Docker-a.",
			btn_title: "Želis objaviti oglas za posao?",
			github:
				"https://github.com/borisblagojevic/job-board-web-app",
			img: "src/images/projects/jobBoardExample.webm",
		},
		{
			title: "PRETRAŽIVANJE SLIKA POMOĆU 'PIXABAY API-a'",
			info: "Ova aplikacija omogućava svojim korisnicima pretraživanje ogromne količine slika koristeći moćni Pixabay API. Korisnici mogu pretražiti bilo koju sliku upisivanjem željenog ključnog pojma poput 'mačke' ili 'automobili' i dobiti listu slika koje se prikazuju kao kartice s samom slikom i podacima o njoj. Također, mogu filtrirati rezultate pretrage odabirom vrste slike poput fotografija, vektora i ilustracija.",
			btn_title: "Pronadji i ti sliku",
			github:
				"https://borisblagojevic.github.io/image-gallery-pixabayAPI-tailwind-react/",
			img: "src/images/projects/imagesSearch.webm",
		},
		{
			title: "RECIPE APP",
			info:
				"Aplikacija koja omogućava svome korisniku pretraživanje preko milion recepata. Dodavanje novih recepata, " +
				" pojednostavljena pretraga grupisanih recepata ili potraga pomoću klučne rječi. " +
				" Takođe korisnik ima mogućnost kriranja vlastitog recepta. Aplikacija rađena po MVC arhitekturi.",
			btn_title: "Nemaš ideju za ručak?",
			github: "https://recipe-app-demo-bb.netlify.app/",
			img: "src/images/projects/recipe.webm",
		},
		{
			title: "TODO APP",
			info:
				" Todo aplikacija koja omogucava njenom korisniku unos novih, brisanje starih kao i filtriranje  zadataka." +
				" Čuvanje sadržaja i stanja unesenih zadatka  te podešavanje izgleda aplikacije se čuva u lokalnoj memoriji browsera. I ova aplikacija je rađena po MVC arhitekturi.",
			btn_title: "Uvjek zaboraviš nešto kupiti?",
			github: "https://borisblagojevic.github.io/todo-app/",
			img: "src/images/projects/todo.webm",
		},
		{
			title: "SISTEM ZA AUTOMATSKO NAVODNJAVANJE BASTE",
			info: "Sistem za navodnjavanje baste koji otvara ventil i ispušta vodu u unaprijed zadato vrijeme. Prva verzija ovog sistem napravljena je 2020. ",
			btn_title: "Da se i tvoja bašta zeleni",
			github:
				"https://github.com/borisblagojevic/automatic-garden-watering-system-arduino",
			img: "src/images/projects/awgs.jpeg",
		},
		{
			title: "OVA STRANICA",
			info: "Projekat koji takođe izdvajam. Radjen u HTML-u SASS-u i malo JavaScript-a za prikazivanje menija, odabira i cuvanje odabranog jezika u lokalnom skladištu.",
			btn_title: "Izvorni kod",
			github: "https://github.com/borisblagojevic/borisblagojevic.github.io",
			img: "src/images/projects/mywebpage.webm",
		},
		{
			title: "OSTALI PROJEKTI",
			info: "Na github-u možete pogledati sve moje ostale radove od kojih opet izdvajam advice generator app, time tracking dashboard i sunnyside agency landing page.",
			btn_title: "Pogledaj i moje ostale projekat",
			github: "https://github.com/borisblagojevic",
			img: "src/images/projects/github.png",
		},
	],
};

export const eng = {
	lang: "eng",
	skipNav: 'Skip Navigation',
	mainTitle: 'Boris Blagojević Software Engineer',
	navigationItem: ["About me", "Resume", "Tools", "Contact", "Projects"],
	headerTitle: ["Hello, I am", "Boris Blagojević"],
	toolsSection: "Languages and tools I use",
	aboutSection: [
		"About me",
		"Born and raised in  Banja Luka.",
		"I graduated from the electrotechnical high school in Banja Luka as a telecommunications technician.",
		"I finished my computer studies at the Pan-European University of Apeiron in Banja Luka and became a software engineer.",
		"Worked for <a class='about__link' href='https://develabs.com/' target='_blank'>Develabs d.o.o.</a> (a partner of <a class='about__link' href='https://www.jedox.com/en/' target='_blank'>Jedox A.G.</a>), where I developed EPM software.",
	    "Now I am working for <a class='about__link' href='https://www.aleapartners.io/' target='_blank'>Alea Partners d.o.o.</a> Banja Luka where I develop 2D games"
    ],
	cvSection: "My resume",
	contactSection: "Let's get in touch",
	projectTitle: "Some of my projects",
	projects: [
		{
			title: "JOB POSTING WEB APP",
			info: "Job board web app made with ReactJS, TailwindCSS and JAVA. Running back-end on Tomcat and storing data using MySQL RDBMS, All parts containerized using Docker.",
			btn_title: "Want to post information about a new job?",
			github:
				"https://github.com/borisblagojevic/job-board-web-app",
			img: "src/images/projects/jobBoardExample.webm",
		},
		{
			title: "IMAGE GALLERY w/ PIXABAY API",
			info:
				"A front end application that allows its user to search an enormous amount " +
				"of images. The user can search any image by typing in a desired keyword" +
				" like 'cats' or 'cars' and then get a list of images present to the user as a " +
				" card with image and data about that image. Filter those search results by " +
				" selecting the type of image like photos, vectors and illustrations.",
			btn_title: "Try searching images yourself",
			github:
				"https://borisblagojevic.github.io/image-gallery-pixabayAPI-tailwind-react/",
			img: "./src/images/projects/imagesSearch.webm",
		},
		{
			title: "RECIPE APP",
			info:
				"This application allows its user to search over a million of different recipes. Add new recipes," +
				" filter recipes by keyword like ingredient or find specific recipe with a search bar. " +
				" A user also has the option of creating their own recipe. This application is made with MVC architecture.",
			btn_title: "Don't have an idea for the dinner today? ",
			github: "https://recipe-app-demo-bb.netlify.app/",
			img: "./src/images/projects/recipe.webm",
		},
		{
			title: "TO DO APP",
			info:
				"To do application that allows its user to enter new tasks, delete old and filter  tasks. " +
				"Saves the content and status of  tasks and the chosen theme of the application in the local " +
				"memory of the browser. This application is also made with MVC architecture.",
			btn_title: "Always forget to buy the milk?",
			github: "https://borisblagojevic.github.io/todo-app/",
			img: "src/images/projects/todo.webm",
		},
		{
			title: "AUTOMATIC WATERING SYSTEM FOR GARDEN",
			info:
				"A garden irrigation system that opens the valve and discharges water at a predetermined time. " +
				" The first version of this system was made in 2020. ",
			btn_title: "Want to have a healthy and green garden?",
			github:
				"https://github.com/borisblagojevic/automatic-garden-watering-system-arduino",
			img: "src/images/projects/awgs.jpeg",
		},
		{
			title: "THIS PAGE",
			info:
				"This page is also one of my major projects. Made in HTML, SASS and a bit of " +
				"JavaScript to display the mobile menu, select languages and to store user preferences locally.",
			btn_title: "Source code",
			github: "https://github.com/borisblagojevic/borisblagojevic.github.io",
			img: "src/images/projects/mywebpage.webm",
		},
		{
			title: "OTHER PROJECTS",
			info:
				"On github you can see all my other work, of which I single out the advice generator app, " +
				" the time tracking dashboard and the Sunnyside agency landing page.",
			btn_title: "Take a look of my other projects",
			github: "https://github.com/borisblagojevic",
			img: "src/images/projects//github.png",
		},
	],
};
