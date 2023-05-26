//!9. Sukurti paieškos funkcionalumą navigacijos elemente:
//!9.1. Navigacijos elemente sukurti formą, kuri turi text tipo input elementą (nepamiršti pridėti name atributą).
//!9.2. Formos submit metu, naudojant action atributą, nukreipti į naują puslapį (search.html).
//!9.3. Šiame puslapyje atvaizduoti paieškos rezultatą.
//!9.3.1. Jeigu nėra tinkamų rezultatų, tai parašyti jog rezultatų pagal užklausą nerasta.

import { navigationGenerator } from "./navigation.js";

async function init() {
  document.body.prepend(navigationGenerator());

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
    initAnswerContainer.append(generateAnswer(searchQuery, userData));
  }

  classRemove();
}

function classRemove() {
  let form = document.querySelector(".search-form");
  form.classList.add("no-display");
}

function generateError() {
  generateAnswerContainer.innerHTML = `<h1>Nieko nerasta</h1>`;

  return generateAnswerContainer;
}

function generateAnswer(search, userData) {
  if (search === "users") {
    let generateAnswerContainer = document.createElement("div");

    userData.forEach((user) => {
      let { name, username, email } = user;
      let userContainer = document.createElement("div");

      generateAnswerContainer.append(userContainer);
      userContainer.innerHTML = `
          <ul>
            <li>Name: ${name}</li>
            <li>User Name: ${username}</li>
            <li>Email: ${email}</li>
          </ul>`;
    });

    return generateAnswerContainer;
  } else if (search === "posts") {
    let generateAnswerContainer = document.createElement("div");
    userData.forEach((post) => {
      let { title, body } = post;
      let userContainer = document.createElement("div");
      generateAnswerContainer.append(userContainer);
      userContainer.innerHTML = `
          <ul>
            <li>Title: ${title}</li>
            <li>Body: ${body}</li>
          </ul>`;
    });

    return generateAnswerContainer;

  } else if (search === "albums") {
    let generateAnswerContainer = document.createElement("div");
    userData.forEach((user) => {
      let userContainer = document.createElement("div");
      generateAnswerContainer.append(userContainer);
      userContainer.innerHTML = `
          <ul>
            <li>Album Title: ${user.title}</li>
            <li>Album Identification: ${user.id}</li>
            <li>User Id: ${user.userId}</li>
          </ul>`;
    });
    return generateAnswerContainer;
  }
}

init();
