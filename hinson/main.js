import "./style.css";

const URL = "https://animechan.vercel.app/api/random";
const Anime = `https://animechan.vercel.app/api/random/character?name=${name}`;
async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("api-response").textContent = console.log(
      data.character
    );
    console.log(data);
  } catch (error) {}
}

getData();
