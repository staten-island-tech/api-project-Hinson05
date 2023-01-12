const DOMSelectors = {
  submit: document.getElementById("submit"),
  Name: document.getElementById("input"),
};
let URL = `https://api.nationalize.io/?name=${Name}`;
async function getData() {
  try {
    const temp = await fetch(URL);
    const array = await temp.json();
    console.log(array);
  } catch (error) {
    console.log(error);
  }
}
getData();
