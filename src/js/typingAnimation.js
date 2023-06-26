const typingAnimation = async () => {
    const animationBox = document.querySelector(".typing-animation");
    const developerBox = document.querySelector(".typing-developer");

    const subtitles = ["Frontend ", "Backend ", "Software Engineer"];

    let i = 0,
        j = 0,
        gold = 0;

    let usersOutput = [];

    let isDeleting = false,
        isEnd = false;

    const type = () => {
        isEnd = false;
        animationBox.setHTML(usersOutput.join("developer"));

        if (i < subtitles.length) {
            if (!isDeleting && j <= subtitles[i].length) {
                usersOutput.push(subtitles[i][j]);
                j++;
                animationBox.setHTML(usersOutput.join(""));
            }

            if (isDeleting && j <= subtitles[i].length) {
                usersOutput.pop(subtitles[i][j]);
                j--;
                animationBox.setHTML(usersOutput.join(""));
            }

            if (j == subtitles[i].length) {
                isEnd = true;
                isDeleting = true;
                gold++;
            }

            if (isDeleting && j === 0) {
                usersOutput = [];
                isDeleting = false;
                i++;

                if (i === subtitles.length)
                    i = 0;
            }
        }

        switch (gold) {
            case 0:
            case 1:
                animationBox.classList.remove("hero__span");

                if (!isDeleting)
                    developerBox.setHTML("developer");

                break;

            case 2:
                if (!isDeleting)
                    developerBox.setHTML("");
                break;


            case 3:
                developerBox.setHTML("");
                animationBox.classList.add("hero__span");
                gold = 0;
                break;
        }

        const spedUp = Math.random() * (20 - 50) + 50;
        const normalSpeed = Math.random() * (300 - 200) + 200;

        const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;

        setTimeout(type, time);
    };

    type();
};

export default typingAnimation;
