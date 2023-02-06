const URL = [`https://www.balldontlie.io/api/v1/players?per_page=100`];

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
