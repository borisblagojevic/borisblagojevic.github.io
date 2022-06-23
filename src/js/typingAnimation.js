const typingAnimation = async () => {
  const animationBox = document.querySelector(".typing-animation");
  const subtitles = ["Frontend ", "Backend ", "Software "];

  let i = 0,
    j = 0,
    gold = 0;
  let usersOutput = [];
  let isDeleting = false,
    isEnd = false;

  const type = () => {
    isEnd = false;
    animationBox.innerHTML = usersOutput.join("");

    if (i < subtitles.length) {
      if (!isDeleting && j <= subtitles[i].length) {
        usersOutput.push(subtitles[i][j]);
        j++;
        animationBox.innerHTML = usersOutput.join("");
      }

      if (isDeleting && j <= subtitles[i].length) {
        usersOutput.pop(subtitles[i][j]);
        j--;
        animationBox.innerHTML = usersOutput.join("");
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
        if (i === subtitles.length) {
          i = 0;
        }
      }
    }

    if (gold === 3) {
      animationBox.classList.add("hero__span");
      gold = 0;
    } else animationBox.classList.remove("hero__span");

    const spedUp = Math.random() * (20 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 200;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    setTimeout(type, time);
  };

  type();
};

export default typingAnimation;
