import "./style.css";
const URL = "https://www.balldontlie.io/api/v1/players";
let player = "bensimmons";



async function getData(URL) {
    try {
        const response = await fetch(URL);
        if (response.status < 200 || response.status > 299) {
            console.log(response.status);
            throw error (response);
        } else {
            const data = await response.json();
            data.data[0].entry.forEach()
        }

    }
}
