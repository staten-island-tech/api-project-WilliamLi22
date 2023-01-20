import "./style.css";
import { DOMSelectors } from "./dom";

const URL = {
  players: "https://www.balldontlie.io/api/v1/players",
  teams: "https://www.balldontlie.io/api/v1/teams",
};

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new error(response);
    } else {
      const data = await response.json();
      data.data[0].forEach((player) => {
        document.getElementById("api-reponse").insertAdjecentHTML(
          "afterbegin",
          `<div class ="card">
                <h2 class = "title">${player.first_name}</h2>
                <h2 class = "title">${player.position}</h2>
                <h2 class = "title">${player.team.full_name}</h2>
                </div>`
        );
      });
      console.log("ok");
    }
  } catch (error) {
    console.log("error");
  }
}

getData(URL);

const input = document.querySelector(`#input`);

DOMSelectors.East.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.input.value = "";
});

const URL2 = "https://www.balldontlie.io/api/v1/players";

const bigfilter = URL2.filter((players) => data.id == 14);

console.log(bigfilter);
