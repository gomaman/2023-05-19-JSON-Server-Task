import { navigationGenerator } from "./navigation.js";
import { firstLetterUpper } from "./functions.js";

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


  if (userData.length == undefined) {
    //!Lauzymas, bet kolkas tiks. Problema kai neranda searchQuery, jis neranda ka sufetchint 
    initAnswerContainer.append(generateError());
  } else {



    let generateAnswerContainer = document.createElement("div");
    initAnswerContainer.append(
      generateAnswer(searchQuery, userData, generateAnswerContainer)
    );
  }

  classRemove();
}

function classRemove() {
  let form = document.querySelector(".search-form");
  form.classList.add("no-display");
}

function generateError() {
  let generateAnswerContainer = document.createElement("div");
  generateAnswerContainer.innerHTML = `<h1>Nieko nerasta</h1>`;
  return generateAnswerContainer;
}

function generateAnswer(search, userData, container) {
  if (search === "users") {
    userData.forEach((user) => {
      let { name, username, email, id } = user;
      let userContainer = document.createElement("div");

      container.append(userContainer);
      userContainer.innerHTML = `
          <ul>
            <li>Name:<a href='/user.html?user_id=${id}'>${name}</a></li>
            <li>User Name: ${username}</li>
            <li>Email: ${email}</li>
          </ul>`;
    });

    return container;

  } else if (search === "posts") {
    userData.forEach((post) => {
      let { title, body, id } = post;
      let userContainer = document.createElement("div");
      container.append(userContainer);
      userContainer.innerHTML = `
          <ul>
            <li>Title:<a href='/post.html?post_id=${id}&user_id=1'>${firstLetterUpper(title)}</a></li>
            <li>Body: ${firstLetterUpper(body)}</li>
          </ul>`;
    });

    return container;

  } else if (search === "albums") {
    userData.forEach((album) => {
      let userContainer = document.createElement("div");
      let { userId, title, id } = album;
      console.log(album.id)
      container.append(userContainer);
      userContainer.innerHTML = `
          <ul>
            <li>Album Title: <a href='/album.html?album_id=${id}'>${title}</a></li>
            <li>Album Identification: ${id}</li>
            <li>User Id: ${userId}</li>
          </ul>`;
    });
    return container;
  }
}

init();
