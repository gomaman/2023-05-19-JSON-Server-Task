import { navigationGenerator } from "./navigation.js"

async function init() {

    let body = document.querySelector('body')
    body.prepend(navigationGenerator())

    let response = await fetch('https://jsonplaceholder.typicode.com/users?_embed=posts')
    let userData = await response.json()

    let userNameItemContainer = document.querySelector('.user-container')
    const userListElement = createUserList(userData)
    userNameItemContainer.append(userListElement)
}

 export function createUserList(users) {
    let userNameItemUL = document.createElement('ul')
    userNameItemUL.classList.add('user-list-container')

    users.forEach(user => {
        let userItem = document.createElement('li')
        let userLink = document.createElement('a')
        let userID = user.id
        userItem.append(userLink)
        userLink.href = "user.html?user_id=" + userID
        let name = user.name
        let userName = user.username
        
        let userPostsAmount = user.posts.length
        userLink.textContent = `Full Name: ${name}`+ `; ` + `Username: ${userName}` + `; ` +`User ID: ${userID}`+ `; ` + `User Posted ${userPostsAmount} times.`
            userNameItemUL.append(userItem)
    });
    return userNameItemUL
}

init()