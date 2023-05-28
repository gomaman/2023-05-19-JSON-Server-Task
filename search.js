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

  const userInfoContainer = document.createElement("div");
  const userInfoUl = document.createElement("ul");

  const postInfoContainer = document.createElement("div");
  const postInfoUl = document.createElement("ul");

  const albumInfoContainer = document.createElement("div");
  const albumInfoUl = document.createElement("ul");

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

  //!USER GENERATE SECTION
  if (foundUsers.length < 1) {
    userInfoUl.append(
      createHTMLElement(
        "span",
        "error",
        `No Users Found with "${searchingFor}"`
      )
    );
  } else {
    userInfoUl.append(
      createHTMLElement(
        "h1",
        "section-title",
        searchingFor ? `"${searchingFor}" in User Names:` : "User Names:"
      )
    );
    foundUsers.forEach((user) => {
      const { id, name } = user;
      const userAnswerLiContainer = document.createElement("li");
      userAnswerLiContainer.innerHTML = `<a href='/user.html?user_id=${id}'>${name}</a>`;
      userInfoUl.append(userAnswerLiContainer);
    });
  }
  userInfoContainer.append(userInfoUl);
  userInfoContainer.classList.add("user-answer-container");

  //!POST GENERATE SECTION
  if (foundPosts.length < 1) {
    postInfoUl.append(
      createHTMLElement(
        "span",
        "error",
        `No Posts Found with "${searchingFor}"`
      )
    );
  } else {
    postInfoUl.append(
      createHTMLElement(
        "h1",
        "section-title",
        searchingFor ? `"${searchingFor}" in Post Titles:` : "Post Titles:"
      )
    );
    foundPosts.forEach((post) => {
      const { id, title } = post;
      const postAnswerLiContainer = document.createElement("li");
      postAnswerLiContainer.innerHTML = `<a href='/post.html?post_id=${id}&user_id=1'>${firstLetterUpper(
        title
      )}</a>`;
      postInfoUl.append(postAnswerLiContainer);
    });
  }
  postInfoContainer.append(postInfoUl);
  postInfoContainer.classList.add("post-answer-container");

  //!ALBUM GENERATE SECTION
  if (foundAlbums.length < 1) {
    albumInfoUl.append(
      createHTMLElement(
        "span",
        "error",
        `No Albums Found with "${searchingFor}"`
      )
    );
  } else {
    albumInfoUl.append(
      createHTMLElement(
        "h1",
        "section-title",
        searchingFor ? `"${searchingFor}" in Album Titles:` : "Album Titles:"
      )
    );
    foundAlbums.forEach((album) => {
      const { id, title } = album;
      const albumAnswerLiContainer = document.createElement("li");
      albumAnswerLiContainer.innerHTML = `<a href='/album.html?album_id=${id}'>${firstLetterUpper(
        title
      )}</a>`;
      albumInfoUl.append(albumAnswerLiContainer);
    });
  }
  albumInfoContainer.append(albumInfoUl);
  albumInfoContainer.classList.add("album-answer-container");

  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const choice = searchForm.category.value;

    const filteredUsers = await fetchData(
      `${API_URL()}/users?q=${searchingFor}`
    );
    const filteredPosts = await fetchData(
      `${API_URL()}/posts?q=${searchingFor}`
    );
    const filteredAlbums = await fetchData(
      `${API_URL()}/albums?q=${searchingFor}`
    );

    userInfoUl.innerHTML = "";
    postInfoUl.innerHTML = "";
    albumInfoUl.innerHTML = "";

    if (choice === "Users") {
      if (filteredUsers.length < 1) {
        userInfoUl.append(
          createHTMLElement(
            "span",
            "error",
            `No Users Found with "${searchingFor}"`
          )
        );
      } else {
        userInfoUl.append(
          createHTMLElement(
            "h1",
            "section-title",
            searchingFor ? `"${searchingFor}" in User Names:` : "User Names:"
          )
        );
        filteredUsers.forEach((user) => {
          const { id, name } = user;
          const userAnswerLiContainer = document.createElement("li");
          userAnswerLiContainer.innerHTML = `<a href='/user.html?user_id=${id}'>${name}</a>`;
          userInfoUl.append(userAnswerLiContainer);
        });
      }
    } else if (choice === "Posts") {
      if (filteredPosts.length < 1) {
        postInfoUl.append(
          createHTMLElement(
            "span",
            "error",
            `No Posts Found with "${searchingFor}"`
          )
        );
      } else {
        postInfoUl.append(
          createHTMLElement(
            "h1",
            "section-title",
            searchingFor ? `"${searchingFor}" in Post Titles:` : "Post Titles:"
          )
        );
        filteredPosts.forEach((post) => {
          const { id, title } = post;
          const postAnswerLiContainer = document.createElement("li");
          postAnswerLiContainer.innerHTML = `<a href='/post.html?post_id=${id}&user_id=1'>${firstLetterUpper(
            title
          )}</a>`;
          postInfoUl.append(postAnswerLiContainer);
        });
      }
    } else if (choice === "Albums") {
      if (filteredAlbums.length < 1) {
        albumInfoUl.append(
          createHTMLElement(
            "span",
            "error",
            `No Albums Found with "${searchingFor}"`
          )
        );
      } else {
        albumInfoUl.append(
          createHTMLElement(
            "h1",
            "section-title",
            searchingFor ? `"${searchingFor}" in Album Titles:` : "Album Titles:"
          )
        );
        filteredAlbums.forEach((album) => {
          const { id, title } = album;
          const albumAnswerLiContainer = document.createElement("li");
          albumAnswerLiContainer.innerHTML = `<a href='/album.html?album_id=${id}'>${firstLetterUpper(
            title
          )}</a>`;
          albumInfoUl.append(albumAnswerLiContainer);
        });
      }
    }

    userInfoContainer.style.display = "block";
    postInfoContainer.style.display = "block";
    albumInfoContainer.style.display = "block";
  });

  answerContainer.append(
    userInfoContainer,
    postInfoContainer,
    albumInfoContainer
  );
}

init();