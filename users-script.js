
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
  