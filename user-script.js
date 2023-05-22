
async function init() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let userData = await response.json();
  singleUserGenerator(userData);
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

function nav() {
  let body = document.querySelector("body");
  let header = document.createElement("header");
  let navigation = document.createElement("nav");

  body.prepend(header);
  header.prepend(navigation);

  let home = document.createElement("a");
  let users = document.createElement("a");
  let albums = document.createElement("a");
  let posts = document.createElement("a");
  let comments = document.createElement("a");
  let user = document.createElement("a");

  navigation.prepend(home, users, albums, posts, comments, user);

  home.setAttribute("href", "index.html");
  home.textContent = "Home";

  users.setAttribute("href", "users.html");
  users.textContent = "Users";

  albums.setAttribute("href", "albums.html");
  albums.textContent = "Albums";

  posts.setAttribute("href", "posts.html");
  posts.textContent = "Posts";

  comments.setAttribute("href", "comments.html");
  comments.textContent = "Comments";

  user.setAttribute("href", "user.html");
  user.textContent = "User/Test";
}

nav();
