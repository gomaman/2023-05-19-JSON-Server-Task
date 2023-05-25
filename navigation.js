//!9. Sukurti paieškos funkcionalumą navigacijos elemente:
//!9.1. Navigacijos elemente sukurti formą, kuri turi text tipo input elementą (nepamiršti pridėti name atributą).
//!9.2. Formos submit metu, naudojant action atributą, nukreipti į naują puslapį (search.html).
//!9.3. Šiame puslapyje atvaizduoti paieškos rezultatą.
//!9.3.1. Jeigu nėra tinkamų rezultatų, tai parašyti jog rezultatų pagal užklausą nerasta.

function nav() {
  let menu = [
    {
      name: `Home`,
      url: `./index.html`,
    },
    {
      name: `Users`,
      url: `./users.html`,
    },
    {
      name: `Albums`,
      url: `./albums.html`,
    },
    {
      name: `Posts`,
      url: `./posts.html`,
    },
    {
      name: `Comments`,
      url: `./comments.html`,
    },
  ];

  let body = document.querySelector("body");
  let header = document.createElement("header");
  let navigation = document.createElement("nav");

  body.prepend(header);
  header.prepend(navigation);

  menu.forEach((menu) => {
    let menuItem = document.createElement("li");
    let menuItemLink = document.createElement("a");
    menuItemLink.textContent = menu.name;
    menuItemLink.href = menu.url;
    menuItem.append(menuItemLink);
    navigation.append(menuItem);
  });

  let menuSearchForm = document.createElement("form")
  menuSearchForm.setAttribute('for','search')

  let menuSearchInput = document.createElement("input")
  menuSearchInput.setAttribute('type','text')
  menuSearchInput.setAttribute('id','search')
  menuSearchInput.setAttribute('name','search')
  let menuSearchButton = document.createElement('input')
  menuSearchButton.setAttribute('type', 'submit')
  menuSearchButton.setAttribute('value', 'Search')

  menuSearchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    if (menuSearchInput.value == '') {
        console.log('rezultatų pagal užklausą nerasta')
    } else {
      const searchQuery = menuSearchInput.value;
      window.location.href = `search.html?query=${searchQuery}`;
      
      
    }

  })
 

  navigation.append(menuSearchForm)
  menuSearchForm.append(menuSearchInput,menuSearchButton)



}

nav();
