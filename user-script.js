//!6. Šiame puslapyje (user.html) turi būti atvaizduojama:
//!6.1. Visi vartotojo parašyti įrašai (posts). Kiekvienas post'as turi turėti nuorodą.
//!6.2. Visi vartotojo sukurti foto albumai. Kiekvienas albumas turės pavadinimą, kuris turi būti nuoroda.

async function init() {
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1?_embed=posts&_embed=albums"
  );
  let userData = await response.json();
  singleUserGenerator(userData);
  postGenerator(userData);
  albumGenerator(userData)
  console.log(userData);
}

function postGenerator(data) {
  let posts = data.posts;
  let userPostItemContainer = document.createElement("div");
  posts.forEach((post) => {
    let body = document.body;
    userPostItemContainer.classList.add("post-container");
    body.append(userPostItemContainer);
    let postLink = document.createElement("a");
    let postTitle = document.createElement("li");
    userPostItemContainer.append(postLink);
    postTitle.innerHTML = post.title;
    postLink.setAttribute("href", "post.html");
    postLink.append(postTitle);
  });
}

function albumGenerator(data) {
    let albums = data.albums;
    let userAlbumsItemContainer = document.createElement("div");
    albums.forEach((album) => {
      let body = document.body;
      userAlbumsItemContainer.classList.add("album-container");
      body.append(userAlbumsItemContainer);
      let albumLink = document.createElement("a");
      let albumTitle = document.createElement("li");
      userAlbumsItemContainer.append(albumLink);
      albumTitle.innerHTML = album.title;
      albumLink.setAttribute("href", "album.html");
      albumLink.append(albumTitle);
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

  let body = document.body;

  let userItemContainer = document.createElement("div");
  userItemContainer.classList.add("user-item-container");
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

  addressItems.append(addressLink);

  body.append(userUnorderedList);
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
