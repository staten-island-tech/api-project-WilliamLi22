import "../styles/style.css";
import { DOMSelectors } from "./dom";

const apiEntry = `https://www.balldontlie.io/api/v1/players`;

async function getAPI() {
  try {
    const result = await fetch(`https://www.balldontlie.io/api/v1/players`);
    if (response.status < 200 || response.status > 299) {
      throw Error(response.status);
    } else {
      const players = await result.json();
      return players;
    }
  } catch (err) {
    console.log("Error");
    document.getElementById("api-response").textContent =
      "I am sorry, there is an error.";
  }
}

/* async function getApi() {
  try {
    const players = await fetch(`https://www.balldontlie.io/api/v1/players`);
    console.log(players);
  } catch (error) {
    console.log(error);
  }
}
getApi();
 */
