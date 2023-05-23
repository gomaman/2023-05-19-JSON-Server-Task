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
        let postCommentAmount = data.comments.length

        postTitleWrap = document.createElement('li')
        postTitleElement  = document.createElement('a')
        postTitleElement.setAttribute('href', 'post.html')
        postAuthorElement = document.createElement('li')
        postCommentAmountElement = document.createElement(`span`)
        postCommentAmountElement.textContent = ` Comment Amount ${postCommentAmount}`
        postTitleElement.textContent = `Post Title: ${postTitle}`
        postAuthorElement.textContent = `Post Author ID: ${postAuthor}`
        postTitleWrap.append(postTitleElement,postCommentAmountElement)


        postInfoBox.append(postTitleWrap, postAuthorElement)
        userPostItemContainer.append(postInfoBox)
    })


}
init()
