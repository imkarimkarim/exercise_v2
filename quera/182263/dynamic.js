async function loadGames() {
  const response = await fetch("./data/games.json");
  if (!response.ok) throw new Error("Network response was not ok");
  return await response.json();
}

function loadLanguages() {
  return Promise.all([
    fetch("./languages/en.json").then((response) => {
      if (!response.ok) throw new Error("Failed to load en.json");
      return response.json();
    }),
    fetch("./languages/fa.json").then((response) => {
      if (!response.ok) throw new Error("Failed to load fa.json");
      return response.json();
    }),
  ]);
}

let currentLang = localStorage.getItem("LANG") || "en";
let currentGame = localStorage.getItem("GAME") || 0;

const updateDocument = () => {
  console.log(
    "🔭 ~ file: dynamic.js:25 ~ updateDocument ~ currentLang:",
    currentLang
  );
  switch (currentLang) {
    case "en":
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
      break;
    default:
      document.documentElement.lang = "fa";
      document.documentElement.dir = "rtl";
      break;
  }
};

updateDocument();

(async () => {
  const games = await loadGames();
  const [en, fa] = await loadLanguages();
  const buttons = document.querySelectorAll("ul li button");

  const updateGameState = async (index = 0) => {
    localStorage.setItem("GAME", index);
    currentGame = index;

    buttons.forEach((btn) => btn.classList.remove("active"));
    buttons[index].classList.add("active");

    const game = games[index];
    const lang = currentLang === "en" ? en : fa;

    const infoSpan = document.querySelector(".info span");
    const infoH2 = document.querySelector(".info h2");
    const infoP = document.querySelector(".info p");
    const infoButton = document.querySelector(".info button");

    infoSpan.textContent = game.name;
    infoH2.textContent = lang.GAMES[index].HEADING;
    infoP.textContent = lang.GAMES[index].DESCRIPTION;
    infoButton.textContent = lang.GENERAL.CALL_TO_ACTION;
    infoButton.style.backgroundColor = game.callToActionButton.backgroundColor;
    infoButton.style.color = game.callToActionButton.color;

    const coverImage = document.querySelector(".cover img");
    coverImage.src = game.image;
    coverImage.alt = game.name;
  };

  updateGameState(currentGame);

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      updateGameState(Number(this.textContent) - 1);
    });
  });

  const changeLanguageButton = document.querySelector(
    'nav button[aria-label="Change Language"]'
  );
  changeLanguageButton.addEventListener("click", () => {
    switch (currentLang) {
      case "en":
        currentLang = "fa";
        localStorage.setItem("LANG", "fa");
        break;
      default:
        currentLang = "en";
        localStorage.setItem("LANG", "en");
        break;
    }

    updateDocument();
    updateGameState(currentGame);
  });
})();
