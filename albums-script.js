import { firstLetterUpper } from "./functions.js"
import { navigationGenerator } from "./navigation.js"


async function init() {
    let response = await fetch('https://jsonplaceholder.typicode.com/albums?_embed=photos&_expand=user')
    let albumData = await response.json()
    albumItemGenerator (albumData)

    let body = document.querySelector('body')
    body.prepend(navigationGenerator())
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
        pictureLink.href = 'album.html?album_id=' + data.id
        title.textContent = `Title: ${firstLetterUpper(data.title)}`
        userName.textContent = `Author: ${data.user.name}`
        pictureAmount.textContent = `Amount of pictures: ${data.photos.length}`
        picture.src = data.photos[0].url

    })
}

init()