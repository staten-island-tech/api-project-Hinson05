import "./style.css";
const URL = "https://animechan.vercel.app/api/random";
const Weather = "https://animechan.vercel.app/api/random/anime?title=naruto";
async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.jason();
    document.getElementById("api-response").textContent = console.log(response);
  } catch (error) {}
}

getData();
