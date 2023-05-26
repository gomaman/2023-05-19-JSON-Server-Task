//!9. Sukurti paieškos funkcionalumą navigacijos elemente:
//!9.1. Navigacijos elemente sukurti formą, kuri turi text tipo input elementą (nepamiršti pridėti name atributą).
//!9.2. Formos submit metu, naudojant action atributą, nukreipti į naują puslapį (search.html).
//!9.3. Šiame puslapyje atvaizduoti paieškos rezultatą.
//!9.3.1. Jeigu nėra tinkamų rezultatų, tai parašyti jog rezultatų pagal užklausą nerasta.

async function init() {
  const queryParams = location.search;
  const urlParams = new URLSearchParams(queryParams);
  const searchQuery = urlParams.get("search");

  let response = await fetch(
    `https://jsonplaceholder.typicode.com/${searchQuery}/`
  );
  let userData = await response.json();

  let initAnswerContainer = document.querySelector(".answer-container");

  if (userData == undefined) {
    initAnswerContainer.append(generateError());
  } else {
    initAnswerContainer.append(generateAnswer());
  }

  classRemove();
}

init();

function generateError() {
  let generateErrorAnswerContainer = document.createElement("div");
  generateErrorAnswerContainer.innerHTML = `<h1>Nieko nerasta</h1>`;

  return generateErrorAnswerContainer;
}

function generateAnswer() {
  let generateErrorAnswerContainer = document.createElement("div");
  generateErrorAnswerContainer.innerHTML = `<h1>Rasti rezultatai:</h1>`;

  return generateErrorAnswerContainer;
}

function classRemove() {
  let form = document.querySelector(".search-form");
  form.classList.add("no-display")
}