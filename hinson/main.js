const DOMSelectors = {
  submit: document.getElementById("submit"),
  name: document.getElementById("input"),
  list: document.getElementById("div"),
};

async function getData() {
  try {
    let URL = `https://api.nationalize.io/?name=${input.value}`;
    const bleh = await fetch(URL);
    const array = await bleh.json();
    console.log(array);
    let flag = `${array.country[0].country_id}`;
    console.log(one);
    let x = DOMSelectors.name.value;
    DOMSelectors.list.insertAdjacentHTML(
      "afterbegin",
      `<p class= "yes"> Name: ${x}  
      Nationality: ${array.country[0].country_id} Probability: ${array.country[0].probability}
      <img src= 'https://flagsapi.com/${flag}/flat/64.png'></p>`
    );
    // https://www.countryflagicons.com/FLAT/64/${array.country[0].country_id}.png
  } catch (error) {
    console.log(error);
  }
}

DOMSelectors.submit.addEventListener("click", function () {
  getData();
});
