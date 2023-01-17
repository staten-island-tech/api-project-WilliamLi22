import "./style.css";
const URL = "https://www.balldontlie.io/api/v1/players";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();
      data.forEach((player) => {
        document.getElementById("api-reponse").insertAdjecentHTML(
          "afterbegin",
          `<div class ="card">
                <h2 class = "title">${player.first_name}</h2>
                </div>`
        );
      });
      console.log(data.data[0].first_name);
    }
  } catch (error) {
    console.log(error);
    console.log("sad");
    document.getElementById("api-response").textcontent =
      "I'm sorry, I couldn't find that. Please try again.";
  }
}

getData(URL);
