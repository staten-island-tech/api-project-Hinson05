const DOMSelectors = {
  submit: document.getElementById("submit"),
};
const Anime = `https://animechan.vercel.app/api/random/character?name=Naruto`;
async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.character);
  } catch (error) {
    console.log(error);
  }
}
getData();
