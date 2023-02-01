import "../styles/style.css";
import { DOMSelectors } from "./dom";

const URL = `https://www.balldontlie.io/api/v1/players`;

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); //makes the data into json object we can use
    console.log(data.first_name);
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
