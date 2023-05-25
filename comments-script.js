async function init() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts?_embed=comments')
    let commentData = await response.json()

    console.log(commentData)
    commentsList(commentData)
}

function commentsList(commentData) {
    let userCommentItemContainer = document.querySelector('.post-container')
    
    commentData.forEach((data) => {
        let commentInfoBox = document.createElement('div')

        console.log(data)


        // commentInfoBox.innerHTML = `<h3>Post Title ${title} </h3>
        //                             <></>
        // `




        userCommentItemContainer.append(commentInfoBox)
    })
}
init()


