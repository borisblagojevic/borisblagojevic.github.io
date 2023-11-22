const animationBox = document.querySelector(".typing-animation");

const typingAnimation = async (again = 0) => {

    const actions = [
        "getRole() . . . ",
        "fetching data . . . ",
        "handle request . . . ",
        "searching through database . . . ",
        "HttpServletResponse.SC_OK . . . ",
        ".then response.json() . . . ",
        "displaying in 3",
        "2 . . . ",
        "1 . . . ",
        "Software Engineer"
    ];

    let i = 0, j = 0, gold = 0;

    let usersOutput = [];

    let isDeleting = false, isEnd = false;

    let timeoutID;

    const type = () => {
        isEnd = false;
        animationBox.innerHTML = usersOutput.join("");

        if (i < actions.length)
        {
            if (!isDeleting && j <= actions[i].length)
            {
                usersOutput.push(actions[i][j]);
                j++;
                animationBox.innerHTML = usersOutput.join("");
            }

            if (isDeleting && j <= actions[i].length)
            {
                usersOutput.pop(actions[i][j]);
                j--;
                animationBox.innerHTML = usersOutput.join("");
            }

            if (j == actions[i].length)
            {
                isEnd = true;
                isDeleting = true;
                gold++;
            }

            if (isDeleting && j === 0)
            {
                usersOutput = [];
                isDeleting = false;
                i++;

                if (i === actions.length - 1)
                {
                    i = actions.length + 1;

                    animationBox.innerHTML = actions[actions.length - 1];

                    animationBox.classList.add("hero__span");

                    animationBox.style.borderStyle = 'none';

                    return;
                }
            }
        }

        const spedUp = 5;
        const normalSpeed = Math.random() * (80) + 20;

        const time = isDeleting ? spedUp : normalSpeed;

        timeoutID = setTimeout(type, again !== 0 ? again : time);
    };

    type();
};

let specialCounter = 0;

animationBox.addEventListener('click', function () {
    if (animationBox.classList.contains('hero__span'))
    {

        animationBox.classList.remove("hero__span");

        animationBox.style.color = 'white';

        specialCounter++;

        let respTXT = "HI";

        switch (specialCounter)
        {
            case 0:
            case 1:
            case 2:
                respTXT = "Sure, lets do it again.";
                break;

            case 3:
                respTXT = "Once again? OK ... ";
                break;

            case 4:
                respTXT = "I know my animation is cool but still, 4th time?";
                break;

            case 5:
                respTXT = "STAHP !!!!";

                animationBox.style.color = 'red';

                break;

            case 6:
                respTXT = "PLEASE ...";

                animationBox.style.color = 'red';

                break;

            case 7:
            default:
                respTXT = "That's enough! Get out =>";

                animationBox.style.color = 'red';

                setTimeout(() => window.location.href = "https://www.google.com", 500);
        }

        console.warn(respTXT);

        typingAnimation(Math.floor(Math.random() * 10 + 2));
    }
    else
    {
        console.warn('Don\'t abuse my animation!');
    }
});

export default typingAnimation;
