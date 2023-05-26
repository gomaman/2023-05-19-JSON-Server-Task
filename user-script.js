import { navigationGenerator } from "./navigation.js";

async function init() {

  let body = document.querySelector('body')
  body.prepend(navigationGenerator())

  const queryParams = location.search
  const urlParams = new URLSearchParams(queryParams) 
  const id = urlParams.get('user_id')

  let response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}?_embed=posts&_embed=albums`
  );
  let userData = await response.json();
  singleUserGenerator(userData);
  postGenerator(userData);
  albumGenerator(userData);
  
}

function postGenerator(data) {
  let singleUser = document.querySelector(".single-user-container");
  let posts = data.posts;
  let userPostItemContainer = document.createElement("div");
  posts.forEach((post) => {
    userPostItemContainer.classList.add("title-post-container");
    singleUser.append(userPostItemContainer);
    let postTitle = document.createElement("li");
    let postLink = document.createElement("a");
    userPostItemContainer.append(postTitle);
    postLink.innerHTML = `Post Title: ${post.title}`;
    postLink.setAttribute("href", "post.html");
    postTitle.append(postLink);
  });
}

function albumGenerator(data) {
  let singleUser = document.querySelector(".single-user-container");
  let albums = data.albums;
  let userAlbumsItemContainer = document.createElement("div");
  albums.forEach((album) => {
    userAlbumsItemContainer.classList.add("title-album-container");
    singleUser.append(userAlbumsItemContainer);
    let albumTitle = document.createElement("li");
    let albumLink = document.createElement("a");
    userAlbumsItemContainer.append(albumTitle);
    albumLink.innerHTML = `Album Title: ${album.title}`;
    albumLink.setAttribute("href", "album.html");
    albumTitle.append(albumLink);
  });
}

function singleUserGenerator(userData) {
  let name = userData.name;
  let username = userData.username;
  let address = userData.address;
  let street = address.street;
  let suite = address.suite;
  let city = address.city;
  let zipCode = address.zipcode;
  let email = userData.email;
  let phone = userData.phone;
  let website = userData.website;
  let companyName = userData.company.name;

  let addressContainer = document.createElement("div");
  addressContainer.classList.add("single-address-container");
  let userUnorderedList = document.createElement("ul");
  userUnorderedList.classList.add("address-ul");

  let nameItem = document.createElement("li");
  let usernameItem = document.createElement("li");
  let emailItem = document.createElement("li");
  let addressItems = document.createElement("li");
  let addressLink = document.createElement("a");
  let phoneItem = document.createElement("li");
  let websiteItem = document.createElement("li");
  let companyNameItem = document.createElement("li");

  addressLink.innerHTML = `<b>Address:</b> ${street} ${suite} ${city} ${zipCode}`;

  addressLink.setAttribute(
    "href",
    `https://www.google.com/maps?q=${userData.address.geo.lat},${userData.address.geo.lng}`
  );

  let singleUser = document.querySelector(".single-user-container");

  addressItems.append(addressLink);

  singleUser.append(addressContainer);
  addressContainer.append(userUnorderedList)

  userUnorderedList.append(
    nameItem,
    usernameItem,
    emailItem,
    addressItems,
    phoneItem,
    websiteItem,
    companyNameItem
  );

  nameItem.textContent = `Name: ${name}`;
  usernameItem.textContent = `User Name: ${username}`;
  emailItem.textContent = `Email: ${email}`;
  phoneItem.textContent = `Phone: ${phone}`;
  websiteItem.textContent = `Website: ${website}`;
  companyNameItem.textContent = `Company Name: ${companyName}`;
}

init();