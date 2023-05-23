async function init() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts?_embed=comments')
    let postData = await response.json()
    postGenerator(postData)
}

function postGenerator(data) {
    let userPostItemContainer = document.querySelector('.post-container')
  
    data.forEach((data) => {
        console.log(data)
        let postInfoBox = document.createElement('ul')
        let postTitle = data.title
        let postAuthor = data.userId
        let postId = data.id
        let postCommentAmount = data.comments.length

        postTitleWrap = document.createElement('li')
        postTitleElement  = document.createElement('a')
        postTitleElement.href = "post.html?post_id=" + postAuthor + "?user_id=" +postId
        postAuthorElement = document.createElement('li')
        postCommentAmountElement = document.createElement(`span`)
        postCommentAmountElement.textContent = ` Comment Amount ${postCommentAmount}`
        postTitleElement.textContent = `Post Title: ${postTitle}`
        postAuthorElement.textContent = `Post Author ID:${postAuthor}` + ` ` + `Post ID:${postId}`
        postTitleWrap.append(postTitleElement,postCommentAmountElement)


        postInfoBox.append(postTitleWrap, postAuthorElement)
        userPostItemContainer.append(postInfoBox)


    })

}


init()
