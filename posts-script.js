import { navigationGenerator } from "./navigation.js"
import { firstLetterUpper } from "./functions.js"

async function init() {

    let body = document.querySelector('body')
    body.prepend(navigationGenerator())

    let response = await fetch('https://jsonplaceholder.typicode.com/posts?_embed=comments')
    let postData = await response.json()
    postGenerator(postData)
}


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

}


init()