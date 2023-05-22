
async function init() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users?_embed=posts')
    let userData = await response.json()

    let userNameItemContainer = document.querySelector('.user-container')
    const userListElement = createUserList(userData)
    userNameItemContainer.append(userListElement)
}

function createUserList(users) {
    let userNameItemUL = document.createElement('ul')
    userNameItemUL.classList.add('user-list-container')

    users.forEach(user => {
        let userItem = document.createElement('li')
        let userLink = document.createElement('a')
        userItem.append(userLink)
        userLink.setAttribute("href" , "user.html")
        let name = user.name
        let userName = user.username
        let userID = user.id
        let userPostsAmount = user.posts.length
        userLink.textContent = `Full Name: ${name}`+ `; ` + `Username: ${userName}` + `; ` +`User ID: ${userID}`+ `; ` + `User Posted ${userPostsAmount} times.`
            userNameItemUL.append(userItem)
    });
    return userNameItemUL
}

init()