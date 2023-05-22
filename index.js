
function nav() {
  let body = document.querySelector("body");
  let header = document.createElement('header')
  let navigation = document.createElement("nav");

  body.prepend(header);
  header.prepend(navigation)

  let home = document.createElement("a");
  let users = document.createElement("a");
  let albums = document.createElement("a");
  let posts = document.createElement("a");
  let comments = document.createElement("a");

  navigation.prepend(home,users,albums,posts,comments)

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
}

nav();