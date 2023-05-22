async function init() {
    let response = await fetch('https://jsonplaceholder.typicode.com/albums?_embed=photos&_expand=user')
    let albumData = await response.json()
    albumItemGenerator (albumData)
}

function albumItemGenerator (data) {
let container = document.querySelector('.album-container')

    data.forEach((data) => {
        let item = document.createElement('ul')
        let title = document.createElement('h3')
        let userName = document.createElement('li')
        let pictureAmount = document.createElement('li')
        let pictureContainer = document.createElement('div')
        pictureContainer.classList.add('album-picture-container')
        let pictureLink = document.createElement('a')
        let picture = document.createElement('img')
        picture.classList.add('album-picture')

        item.append(title,userName,pictureAmount)
        pictureLink.append(picture)
        pictureContainer.append(pictureLink)
        container.append(item,pictureContainer)

        pictureLink.setAttribute('href', 'album.html')
        title.textContent = `Title: ${data.title}`
        userName.textContent = `Author: ${data.user.name}`
        pictureAmount.textContent = `Amount of pictures: ${data.photos.length}`
        picture.src = data.photos[0].url

    })
}

init()

function nav() {
    let body = document.querySelector("body");
    let navigation = document.createElement("nav");
  
    body.prepend(navigation);
  
    let home = document.createElement("a");
    let users = document.createElement("a");
    let albums = document.createElement("a");
    let posts = document.createElement("a");
    let comments = document.createElement("a");
  
    navigation.prepend(home,users,albums,posts,comments)
  
    home.setAttribute('href','home.html')
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
  