import "../styles/style.css";
import { DOMSelectors } from "./dom";

const URL = `https://www.balldontlie.io/api/v1/players?per_page=100`;

//https://www.balldontlie.io/api/v1/players?page=2&per_page=100 use this and continue to do for all pages

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw Error(response.status);
    } else {
      const data = await response.json(); //makes the data into json object we can use
      console.log(data);
      document.getElementById("api-response");
    }
  } catch (error) {
    console.log(error);
  }
}
getData(URL);

const apiresponse = document.querySelector(`#apiresponse`);

document.getElementById("all").addEventListener("click", function () {
  apiresponse.innerHTML = ``;
  allplayers();
});

async function allplayers() {
  const response = await fetch(URL);
  const Info = await response.json();
  console.log(Info);
  Info.data.forEach((data) =>
    document.getElementById("apiresponse").insertAdjacentHTML(
      "beforeend",
      `
        <div class="card">
        <h2 class="apiresponse">${data.first_name} ${data.last_name}</h2>
        <h2 class="apiresponse">${data.height_feet} ${data.height_inches}</h2>
        <h2 class="apiresponse">${data.weight}</h2>
 
  </div>
  `
    )
  );
}
