const DOMSelectors = {
  submit: document.getElementById("submit"),
  name: document.getElementById("input"),
  list: document.getElementById("div"),
};
let URL = `https://api.nationalize.io/?name=${name}`;
async function getData() {
  try {
    const temp = await fetch(URL);
    const array = await temp.json();
    console.log(array);
    let x = DOMSelectors.name.value;
    DOMSelectors.list.insertAdjacentHTML(
      "afterbegin",
      `<p>class= "yes"> Name: ${x} </p> class= "yes"> Name: ${x} 
      Nationality: ${array.country.country_id}</p>`
    );
  } catch (error) {
    console.log(error);
  }
}

DOMSelectors.submit.addEventListener("click", function () {
  getData();
});
