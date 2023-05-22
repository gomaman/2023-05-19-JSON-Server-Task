//!  5. Sukurti naują puslapį user.html, kuriame bus atvaizduojama vartotojo informacija:
//!  5.1. Pilnas vardas.
//!  5.2. Vartotojo vardas / nick'as.
//!  5.3. El. paštas.
//!  5.4. Adresas, kuris turės gatvę, namo numerį, miestą, pašto kodą. Paspaudus ant adreso, pagal koordinates, turėtų atidaryti šios vietos Google Maps.
//!  5.5. Telefono numeris.
//!  5.6. Internetinio puslapio adresas.
//!  5.7. Įmonės, kurioje dirba, pavadinimas.

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

  let addressItems = document.createElement("ul");
  let streetItem = document.createElement("li");
  let suiteItem = document.createElement("li");
  let cityItem = document.createElement("li");
  let zipCodeItem = document.createElement("li");

  let phoneItem = document.createElement("li");
  let websiteItem = document.createElement("li");
  let companyNameItem = document.createElement("li");

  streetItem.textContent = street;
  suiteItem.textContent = suite;
  cityItem.textContent = city;
  zipCodeItem.textContent = zipCode;

  addressItems.append(
    streetItem,
    suiteItem,
    cityItem,
    zipCodeItem);

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

  nameItem.textContent = name;
  usernameItem.textContent = username;
  emailItem.textContent = email;
  phoneItem.textContent = phone;
  websiteItem.textContent = website;
  companyNameItem.textContent = companyName;
}

init();

function nav() {
    let body = document.querySelector("body");
    let header = document.createElement('header')
    let navigation = document.createElement("nav");
  
    body.prepend(header);
    header.prepend(navigation)
  
    let home     = document.createElement("a");
    let users    = document.createElement("a");
    let albums   = document.createElement("a");
    let posts    = document.createElement("a");
    let comments = document.createElement("a");
    let user     = document.createElement("a");
  
    navigation.prepend(home,users,albums,posts,comments,user)
  
    home.setAttribute('href','index.html')
    home.textContent = 'Home'
  
    users.setAttribute('href','users.html')
    users.textContent = 'Users'
  
    albums.setAttribute('href','albums.html')
    albums.textContent = 'Albums'
  
    posts.setAttribute('href','posts.html')
    posts.textContent = 'Posts'
  
    comments.setAttribute('href','comments.html')
    comments.textContent = 'Comments'

      
    user.setAttribute('href','user.html')
    user.textContent = 'User/Test'


  }
  
  nav();