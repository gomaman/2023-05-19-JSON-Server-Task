import { navigationGenerator } from "./navigation.js";
import { fetchData, firstLetterUpper, getUrlParams, createHTMLElement } from "./functions.js";
import { API_URL } from "./config.js";

async function init() {
  const answerContainer = document.querySelector(".answer-container");
  answerContainer.before(navigationGenerator());

  // User Info Section
  const userInfoContainer = document.createElement("div");
  const userInfoUl = document.createElement("ul");
  userInfoContainer.append(userInfoUl);
  userInfoContainer.classList.add("user-answer-container");

  let searchingFor = getUrlParams("search");
  const foundUsers = await fetchData(`${API_URL()}/users?q=${searchingFor}`);

  if (foundUsers.length < 1) {
    userInfoUl.append(createHTMLElement("span", "error", `No Users Found with "${searchingFor}"`));
  } else if (searchingFor !== "") {

    userInfoUl.append(createHTMLElement("h1", "section-title", `"${searchingFor}" in User Names:`));

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

  const foundPosts = await fetchData(`${API_URL()}/posts?q=${searchingFor}`);

  if (foundPosts.length < 1) {
    postInfoUl.append(createHTMLElement("span", "error", `No Posts Found with "${searchingFor}"`));
  } else if(searchingFor !== ""){
    postInfoUl.append(createHTMLElement("h1", "section-title", ` "${searchingFor}" in Post Titles: `));
    foundPosts.forEach((post) => {
      const { body, id, title, userId } = post;
      const postAnswerLiContainer = document.createElement("li");
      postAnswerLiContainer.innerHTML = `<a href='/post.html?post_id=${id}&user_id=1'>${firstLetterUpper(title)}</a>`;
      postInfoUl.append(postAnswerLiContainer);
    });
  } else {
    postInfoUl.append(createHTMLElement("h1", "section-title", `Post Titles: `));
    foundPosts.forEach((post) => {
      const { body, id, title, userId } = post;
      const postAnswerLiContainer = document.createElement("li");
      postAnswerLiContainer.innerHTML = `<a href='/post.html?post_id=${id}&user_id=1'>${firstLetterUpper(title)}</a>`;
      postInfoUl.append(postAnswerLiContainer);
    });
  }
  
  // Album Info Section
  const albumInfoContainer = document.createElement("div");
  const albumInfoUl = document.createElement("ul");
  albumInfoContainer.append(albumInfoUl);
  albumInfoContainer.classList.add("album-answer-container");

  const foundAlbums = await fetchData(`${API_URL()}/albums?q=${searchingFor}`);
  
  if (foundAlbums.length < 1) {
    albumInfoUl.append(createHTMLElement("span", "error", `No Albums Found with "${searchingFor}"`));
  } else if(searchingFor !== "") {
    albumInfoUl.append(createHTMLElement("h1", "section-title", ` "${searchingFor}" in Album Titles:`));
    foundAlbums.forEach((album) => {
      const { id, title, userId } = album;
      const albumAnswerLiContainer = document.createElement("li");
      albumAnswerLiContainer.innerHTML = `<a href='/album.html?album_id=${id}'>${firstLetterUpper(title)}</a>`;
      albumInfoUl.append(albumAnswerLiContainer);
    });
  } else {
    albumInfoUl.append(createHTMLElement("h1", "section-title", ` Album Titles:`));
    foundAlbums.forEach((album) => {
      const { id, title, userId } = album;
      const albumAnswerLiContainer = document.createElement("li");
      albumAnswerLiContainer.innerHTML = `<a href='/album.html?album_id=${id}'>${firstLetterUpper(title)}</a>`;
      albumInfoUl.append(albumAnswerLiContainer);
    });
  }

  // Append sections to answer container
  answerContainer.append(userInfoContainer, postInfoContainer, albumInfoContainer);
}

init();

// async function init() {
//   document.body.prepend(navigationGenerator());

//   const searchedUsers = fetchData(`${API_URL()}/users?q=${getUrlParams('search')}/`);
//   const searchedPosts = fetchData(`${API_URL()}/posts?q=${getUrlParams('search')}/`);
//   const searchedAlbums = fetchData(`${API_URL()}/albums?q=${getUrlParams('search')}/`);

//   console.log(searchedAlbums)
//   let userData = await response.json();

//   let initAnswerContainer = document.querySelector(".answer-container");

//   if (userData.length == undefined) {
//     initAnswerContainer.append(generateError());
//   } else {
//     let generateAnswerContainer = document.createElement("div");
//     initAnswerContainer.append(
//       generateAnswer(getUrlParams('search'), userData, generateAnswerContainer)
//     );
//   }
//   classRemove();
// }

// function classRemove() {
//   let form = document.querySelector(".search-form");
//   form.classList.add("no-display");
// }

// function generateError() {
//   let generateAnswerContainer = document.createElement("div");
//   generateAnswerContainer.innerHTML = `<h1>Nieko nerasta</h1>`;
//   return generateAnswerContainer;
// }

// function generateAnswer(search, userData, container) {
//   if (search === "users") {
//     userData.forEach((user) => {
//       let { name, username, email, id } = user;
//       let userContainer = document.createElement("div");
//       container.append(userContainer);
//       userContainer.innerHTML = `
//           <ul>
//             <li>Name:<a href='/user.html?user_id=${id}'>${name}</a></li>
//             <li>User Name: ${username}</li>
//             <li>Email: ${email}</li>
//           </ul>`;
//     });

//     return container;

//   } else if (search === "posts") {
//     userData.forEach((post) => {
//       let { title, body, id } = post;
//       let userContainer = document.createElement("div");
//       container.append(userContainer);
//       userContainer.innerHTML = `
//           <ul>
//             <li>Title:<a href='/post.html?post_id=${id}&user_id=1'>${firstLetterUpper(
//         title
//       )}</a></li>
//             <li>Body: ${firstLetterUpper(body)}</li>
//           </ul>`;
//     });

//     return container;

//   } else if (search === "albums") {
//     userData.forEach((album) => {
//       let userContainer = document.createElement("div");
//       let { userId, title, id } = album;
//       container.append(userContainer);
//       userContainer.innerHTML = `
//           <ul>
//             <li>Album Title: <a href='/album.html?album_id=${id}'>${title}</a></li>
//             <li>Album Identification: ${id}</li>
//             <li>User Id: ${userId}</li>
//           </ul>`;
//     });
//     return container;
//   }
// }

// init();
