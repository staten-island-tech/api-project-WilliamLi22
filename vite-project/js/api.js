const URL = [
  `https://www.balldontlie.io/api/v1/players?per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=2&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=3&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=4&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=5&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=6&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=7&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=8&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=9&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=10&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=11&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=12&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=13&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=14&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=15&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=16&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=17&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=18&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=19&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=20&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=21&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=22&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=23&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=23&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=24&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=25&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=26&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=27&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=28&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=29&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=30&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=31&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=32&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=33&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=34&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=35&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=36&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=37&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=38&per_page=100`,
  `https://www.balldontlie.io/api/v1/players?page=39&per_page=100`,
];

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

export { URL };
