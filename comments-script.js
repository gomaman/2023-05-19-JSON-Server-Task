async function init() {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=50&_expand=post')
    let commentData = await response.json()
    whateverList(commentData)
}

function whateverList(commentData) {
    let userCommentItemContainer = document.querySelector('.post-container')
    
    commentData.forEach((data) => {
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


