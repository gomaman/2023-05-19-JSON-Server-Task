//?https://jsonplaceholder.typicode.com/
//?https://github.com/typicode/json-server
//?https://jsonplaceholder.typicode.com







async function init() {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=50&_expand=post')
    let commentData = await response.json()
    whateverList(commentData)
}

function whateverList(commentData) {
    let userCommentItemContainer = document.querySelector('.post-container')
    
    commentData.forEach((data) => {
        console.log(data)
        let commentInfoBox = document.createElement('ul')
        let commentTitle = data.name
        let commentBody = data.body
        let commenterId = data.postId
        let commentEmail = data.email
        let commentPostOrigin = data.post.title

        commentInfoListItemId  = document.createElement('a')
        commentInfoListItemId.setAttribute('href', 'posts.html')
        commentInfoListItemTitle = document.createElement('li')
        commentInfoListItemBody = document.createElement('li')
        commentInfoListItemEmail = document.createElement('li')
        commentInfoListItemPostOrigin = document.createElement('li')

        commentInfoListItemId.textContent = `User ID: ${commenterId}`
        commentInfoListItemTitle.textContent = `Post Title: ${commentTitle}`
        commentInfoListItemBody.textContent = `Post Body: ${commentBody}`
        commentInfoListItemEmail.textContent = `Email: ${commentEmail}`
        commentInfoListItemPostOrigin.textContent = `Comment Origin: ${commentPostOrigin}`

        commentInfoBox.append(commentInfoListItemId,commentInfoListItemTitle,commentInfoListItemBody,commentInfoListItemEmail,commentInfoListItemPostOrigin)
        userCommentItemContainer.append(commentInfoBox)
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
  