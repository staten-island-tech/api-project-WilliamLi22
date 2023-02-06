import "../styles/style.css";
import { DOMSelectors } from "./dom";
import { URL } from "../js/api.js";

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
        <h2 class="apiresponse">Name: ${data.first_name} ${data.last_name}</h2>
        <h2 class="apiresponse">Height: ${data.height_feet} Feet ${data.height_inches} Inches</h2>
        <h2 class="apiresponse">Weight: ${data.weight} Pounds</h2>
 
  </div>
  `
    )
  );
}

document.getElementById("guards").addEventListener("click", function () {
  apiresponse.innerHTML = ``;
  guards();
});

async function guards() {
  const response = await fetch(URL);
  const Info = await response.json();
  console.log(Info);
  Info.data
    .filter((data) => data.position.includes("G"))
    .forEach((data) =>
      document.getElementById("apiresponse").insertAdjacentHTML(
        "beforeend",
        `
        <div class="card">
        <h2 class="apiresponse">Name: ${data.first_name} ${data.last_name}</h2>
        <h2 class="apiresponse">Height: ${data.height_feet} Feet ${data.height_inches} Inches</h2>
        <h2 class="apiresponse">Weight: ${data.weight} Pounds</h2>
 
  </div>
  `
      )
    );
}

document.getElementById("forwards").addEventListener("click", function () {
  apiresponse.innerHTML = ``;
  forwards();
});

async function forwards() {
  const response = await fetch(URL);
  const Info = await response.json();
  console.log(Info);
  Info.data
    .filter((data) => data.position.includes("F"))
    .forEach((data) =>
      document.getElementById("apiresponse").insertAdjacentHTML(
        "beforeend",
        `
        <div class="card">
        <h2 class="apiresponse">Name: ${data.first_name} ${data.last_name}</h2>
        <h2 class="apiresponse">Height: ${data.height_feet} Feet ${data.height_inches} Inches</h2>
        <h2 class="apiresponse">Weight: ${data.weight} Pounds</h2>
 
  </div>
  `
      )
    );
}

document.getElementById("centers").addEventListener("click", function () {
  apiresponse.innerHTML = ``;
  centers();
});

async function centers() {
  const response = await fetch(URL);
  const Info = await response.json();
  console.log(Info);
  Info.data
    .filter((data) => data.position.includes("C"))
    .forEach((data) =>
      document.getElementById("apiresponse").insertAdjacentHTML(
        "beforeend",
        `
        <div class="card">
        <h2 class="apiresponse">Name: ${data.first_name} ${data.last_name}</h2>
        <h2 class="apiresponse">Height: ${data.height_feet} Feet ${data.height_inches} Inches</h2>
        <h2 class="apiresponse">Weight: ${data.weight} Pounds</h2>
 
  </div>
  `
      )
    );
}

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
});

let input = document.input.value;

docmuent.content.innerHTML = "";
async function specificplayer(URL, input) {
  const response = await fetch(URL);
  const Info = await response.json();
  Info.data
    .filter((data) => data.first_name && data.last_name.includes(`${Input}`))
    .forEach((data) => {
      document.getElementById("apiresponse").insertAdjacentHTML(
        "beforeend",
        `
          <div class="card">
          <h2 class="apiresponse">Name: ${data.first_name} ${data.last_name}</h2>
          <h2 class="apiresponse">Height: ${data.height_feet} Feet ${data.height_inches} Inches</h2>
          <h2 class="apiresponse">Weight: ${data.weight} Pounds</h2>
   
    </div>
    `
      );
    });
  specificplayer(URL, input);
}
