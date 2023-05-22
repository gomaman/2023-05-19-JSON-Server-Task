







//!    2. Sukurti puslapį, kuriame bus atvaizduojami įrašai (posts). Kiekvienas įrašas turi:
//!  2.1. Pavadinimą. Tai turi būti nuoroda. Ji turi vesti į post.html puslapį.
//!  2.2. Autorių. Tai turi būti nuoroda. Ji turi vesti į user.html puslapį.
//!  2.3. Prie pavadinimo pridėti įrašo komentarų skaičių.




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
        postTitleElement.setAttribute('href', 'users.html')
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
