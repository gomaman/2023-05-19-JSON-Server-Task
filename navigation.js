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


}

nav();
