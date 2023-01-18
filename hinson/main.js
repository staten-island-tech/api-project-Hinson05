const DOMSelectors = {
  submit: document.getElementById("submit"),
  name: document.getElementById("input"),
  list: document.getElementById("div"),
};

async function getData() {
  try {
    let URL = `https://api.nationalize.io/?name=${name}`;
    const temp = await fetch(URL);
    const array = await temp.json();
    console.log(array);
    let x = DOMSelectors.name.value;
    DOMSelectors.list.insertAdjacentHTML(
      "afterbegin",
      `<p class= "yes"> Name: ${x}  
      Nationality: ${array.country.country_id} Probability: ${array.country.probability}</p>`
    );
  } catch (error) {
    console.log(error);
  }
}

DOMSelectors.submit.addEventListener("click", function () {
  getData();
});
