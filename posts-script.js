async function init() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts?_embed=comments')
    let postData = await response.json()

    postGenerator(postData)

}

import { firstLetterUpper } from "./functions.js" 

function postGenerator(data) {
    
    data.forEach((data) => {
        let userPostItemContainer = document.querySelector('.post-container')
        let postInformationWrapper = document.createElement('div')
        let {userId, id, title, body, comments} = data

        postInformationWrapper.innerHTML = `<h1 class='post-title'>Post Title: <a href='post.html?post_id=${id}&user_id=${userId}' class='post-title-link'>${firstLetterUpper(title)}</a></h1>
                                            <ul>User Identification:
                                            <li> User ID: ${userId} </li>
                                            <li> Post ID: ${id}</li>
                                            <li> Post has: ${comments.length} comments</li>
                                            </ul>
                                            <p>Comment: ${firstLetterUpper(body)}</p>

                                            `


        userPostItemContainer.append(postInformationWrapper)
    })
    
  
    // data.forEach((data) => {
    //     let postInfoBox = document.createElement('ul')
    //     let postTitle = data.title
    //     let postAuthorID = data.userId
    //     let postId = data.id
    //     let postCommentAmount = data.comments.length

    //     let postTitleWrap = document.createElement('li')
    //     let postTitleElement  = document.createElement('a')

    //     postTitleElement.href = `post.html?post_id=${postAuthorID}&user_id=${postId}`;
    //     let postAuthorElement = document.createElement('li')
    //     let postCommentAmountElement = document.createElement(`span`)
    //     postCommentAmountElement.textContent = ` Comment Amount ${postCommentAmount}`
    //     postTitleElement.textContent = `Post Title: ${firstLetterUpper(postTitle)}`
    //     postAuthorElement.textContent = `Post Author ID:${postAuthorID}` + ` ` + `Post ID:${postId}`
    //     postTitleWrap.append(postTitleElement,postCommentAmountElement)

    //     postInfoBox.append(postTitleWrap, postAuthorElement)
    //     userPostItemContainer.append(postInfoBox)

    // })

}


init()
