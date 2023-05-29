import { navigationGenerator } from "./navigation.js";
import {
  fetchData,
  firstLetterUpper,
  getUrlParams,
  createHTMLElement,
} from "./functions.js";
import { API_URL, menuItemsArr } from "./config.js";

async function init() {
  const answerContainer = document.querySelector(".answer-container");
  answerContainer.before(navigationGenerator());

  let searchingFor = getUrlParams("search");
  const foundUsers = await fetchData(`${API_URL()}/users?q=${searchingFor}`);
  const foundPosts = await fetchData(`${API_URL()}/posts?q=${searchingFor}`);
  const foundAlbums = await fetchData(`${API_URL()}/albums?q=${searchingFor}`);

  //search options
  let searchForm = document.querySelector(".search-form");
  let searchCategory = document.createElement("select");

  searchCategory.name = "category";
  menuItemsArr.forEach((item) => {
    let option = document.createElement("option");
    option.innerHTML = item;
    option.value = item;
    searchCategory.append(option);
  });
  searchForm.prepend(searchCategory);

  let searchOptionSelected
  
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    searchOptionSelected = searchCategory.value;
    });

  // User Info Section
  const userInfoContainer = document.createElement("div");
  const userInfoUl = document.createElement("ul");
  userInfoContainer.append(userInfoUl);
  userInfoContainer.classList.add("user-answer-container");

  if (foundUsers.length < 1) {
    userInfoUl.append(createHTMLElement("span", "error", `No Users Found with "${searchingFor}"`));
  } else if (searchingFor !== "") {
    userInfoUl.append(
      createHTMLElement("h1", "section-title", `"${searchingFor}" in User Names:`));
    foundUsers.forEach((user) => {
      const { id, name, username, email } = user;
      const userAnswerLiContainer = document.createElement("li");
      userAnswerLiContainer.innerHTML = `<a href='/user.html?user_id=${id}'>${name}</a>`;
      userInfoUl.append(userAnswerLiContainer);
    });
  } else {
    userInfoUl.append(createHTMLElement("h1", "section-title", `User Names:`));
    foundUsers.forEach((user) => {
      const { id, name, username, email } = user;
      const userAnswerLiContainer = document.createElement("li");
      userAnswerLiContainer.innerHTML = `<a href='/user.html?user_id=${id}'>${name}</a>`;
      userInfoUl.append(userAnswerLiContainer);
    });
  }
  // Post Info Section
  const postInfoContainer = document.createElement("div");
  const postInfoUl = document.createElement("ul");
  postInfoContainer.append(postInfoUl);
  postInfoContainer.classList.add("post-answer-container");

  if (foundPosts.length < 1) {
    postInfoUl.append(
      createHTMLElement("span", "error", `No Posts Found with "${searchingFor}"`));
  } else if (searchingFor !== "") {
    postInfoUl.append(
      createHTMLElement("h1", "section-title", ` "${searchingFor}" in Post Titles: `));
    foundPosts.forEach((post) => {
      const { body, id, title, userId } = post;
      const postAnswerLiContainer = document.createElement("li");
      postAnswerLiContainer.innerHTML = `<a href='/post.html?post_id=${id}&user_id=1'>${firstLetterUpper(title)}</a>`;
      postInfoUl.append(postAnswerLiContainer);
    });
  } else {
    postInfoUl.append(
      createHTMLElement("h1", "section-title", `Post Titles: `)
    );
    foundPosts.forEach((post) => {
      const { body, id, title, userId } = post;
      const postAnswerLiContainer = document.createElement("li");
      postAnswerLiContainer.innerHTML = `<a href='/post.html?post_id=${id}&user_id=1'>${firstLetterUpper(
        title
      )}</a>`;
      postInfoUl.append(postAnswerLiContainer);
    });
  }

  // Album Info Section
  const albumInfoContainer = document.createElement("div");
  const albumInfoUl = document.createElement("ul");
  albumInfoContainer.append(albumInfoUl);
  albumInfoContainer.classList.add("album-answer-container");

  if (foundAlbums.length < 1) {
    albumInfoUl.append(createHTMLElement("span", "error", `No Albums Found with "${searchingFor}"`));
  } else if (searchingFor !== "") {
    albumInfoUl.append(
      createHTMLElement("h1", "section-title", ` "${searchingFor}" in Album Titles:`));
    foundAlbums.forEach((album) => {
      const { id, title, userId } = album;
      const albumAnswerLiContainer = document.createElement("li");
      albumAnswerLiContainer.innerHTML = `<a href='/album.html?album_id=${id}'>${firstLetterUpper(title)}</a>`;
      albumInfoUl.append(albumAnswerLiContainer);
    });
  } else {
    albumInfoUl.append(
      createHTMLElement("h1", "section-title", ` Album Titles:`)
    );
    foundAlbums.forEach((album) => {
      const { id, title, userId } = album;
      const albumAnswerLiContainer = document.createElement("li");
      albumAnswerLiContainer.innerHTML = `<a href='/album.html?album_id=${id}'>${firstLetterUpper(
        title
      )}</a>`;
      albumInfoUl.append(albumAnswerLiContainer);
    });
  }

  answerContainer.append(
    userInfoContainer,
    postInfoContainer,
    albumInfoContainer
  );
}

init();


