const DOMSelectors = {
  submit: document.getElementById("submit"),
};
const Anime = `https://animechan.vercel.app/api/random/character?name=${name}`;
async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById(response).textContent = console.log(data.character);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();
