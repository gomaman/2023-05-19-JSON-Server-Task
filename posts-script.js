







//!    2. Sukurti puslapį, kuriame bus atvaizduojami įrašai (posts). Kiekvienas įrašas turi:
//!  2.1. Pavadinimą. Tai turi būti nuoroda. Ji turi vesti į post.html puslapį.
//!  2.2. Autorių. Tai turi būti nuoroda. Ji turi vesti į user.html puslapį.
//!  2.3. Prie pavadinimo pridėti įrašo komentarų skaičių.




async function init() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts?_embed=comments')
    let postData = await response.json()
    whateverList(postData)
}

function whateverList(data) {
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
  