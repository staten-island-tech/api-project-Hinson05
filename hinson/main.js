const DOMSelectors = {
  submit: document.getElementById("submit"),
  name: document.getElementById("input"),
  list: document.getElementById("div"),
  clear: document.getElementById("clear"),
};

async function getData() {
  try {
    let URL = `https://api.nationalize.io/?name=${input.value}`;
    const bleh = await fetch(URL);
    const array = await bleh.json();
    console.log(array);
    let flag = `${array.country[0].country_id}`;
    let x = DOMSelectors.name.value;

    DOMSelectors.list.insertAdjacentHTML(
      "afterbegin",
      `<p class= "yes"> Name: ${x}  
      Nationality: ${array.country[0].country_id} Probability: ${array.country[0].probability}
      <img id= "image" src= 'https://flagsapi.com/${flag}/flat/64.png'></p>`
    );
    DOMSelectors.name.value = "";
    // https://www.countryflagicons.com/FLAT/64/${array.country[0].country_id}.png
  } catch (error) {
    console.log(error);
    DOMSelectors.list.insertAdjacentHTML(
      "afterbegin",
      `<p class="yes">that's a dumb name, get a better one</p>`
    );
    DOMSelectors.name.value = "";
  }
}
DOMSelectors.clear.addEventListener("click", function () {
  DOMSelectors.list.innerHTML = "";
});

DOMSelectors.submit.addEventListener("click", function () {
  getData();
});
