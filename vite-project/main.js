import "./style.css";

const URL = "https://www.balldontlie.io/api/v1/players";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new error(response);
    } else {
      const data = await response.json();
      data.data.forEach((player) => {
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
