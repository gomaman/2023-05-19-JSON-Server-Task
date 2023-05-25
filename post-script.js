async function init() {

    const queryParams = location.search
    const urlParams = new URLSearchParams(queryParams) 
    const id = urlParams.get('post_id')


  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}?_expand=user&_embed=comments`
  );
  let postData = await response.json();

    console.log(postData)
  const postContainer = document.querySelector(".single-post-container");

  postContainer.append(singlePost(postData), postComments(postData));
}




function singlePost(post) {
  let singlePost = document.createElement("div");
  singlePost.classList.add("post-title-wrapper");
  console.log(post)
  const { title, body } = post;
  const { name } = post.user;
  singlePost.innerHTML = `    <h2>Post Title: ${title}</h2>
                                <span>Author Name:<a href='user.html'> ${name}</a></span>
                                <p>Post body: ${body}</p>
                                <a href='posts.html'>Kiti autoriaus irasai</a>
                              `;
  return singlePost;
}
init();

function postComments(post) {
  let commentInfo = document.createElement("div");
  commentInfo.classList.add("comments-wrapper");
  post.comments.forEach((comment) => {
    let singleCommentInfo = document.createElement("div");
    singleCommentInfo.classList.add("single-comment-wrapper");
    const { name, body, email } = comment;
    singleCommentInfo.innerHTML = ` <h3>Comment Title: ${name}</h3>
                                        <span>Comment: ${body}</span>
                                        <address>Email: ${email}</address>
        `;
    commentInfo.append(singleCommentInfo);
  });

  return commentInfo;
}

// function postComments(post) {
//     let commentInfo = document.createElement('div')
//     post.comments.forEach((comment) => {
//         const {name, body, email} = comment
//         commentInfo.innerHTML = `<h3>${name}</h3>
//                                  <span>${body}</span>
//                                 <address>${email}</address>
//         `
//     })
//     return commentInfo

// function singlePost(post) {

//     const {title, body, comments } = post
//     const postName = post.user.name // i autoriaus puslapi nuvest tures

//     let postContainer = document.querySelector('.single-post-container')
//     let titleElement = document.createElement('h2')
//     let nameElement = document.createElement('span')
//     let bodyElement = document.createElement('p')
//     let commentInfo = document.createElement('div')
//     let commentsUl = document.createElement('ul')

//     commentInfo.append(commentsUl)
//     postContainer.append(titleElement,nameElement,bodyElement,commentInfo)

//     let postTitle = post.title

//     let postBody  = post.body
//     let commentsArr = post.comments

//     commentsArr.forEach((comment) => {
//         console.log(comment)

//         let commentLi = document.createElement('li')
//         commentInfo.classList.add('comment-information')

//         commentsUl.append(commentLi)

//         commentLi.textContent = comment.body
//         console.log(comment)
//     })
//     titleElement.textContent = postTitle
//     nameElement.textContent = postName
//     bodyElement.textContent = postBody
// }
