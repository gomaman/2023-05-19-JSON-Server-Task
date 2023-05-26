import { firstLetterUpper } from "./functions.js";

async function init() {
  const queryParams = location.search;
  const urlParams = new URLSearchParams(queryParams);
  const id = urlParams.get("post_id");

  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}?_expand=user&_embed=comments`
  );
  let postData = await response.json();

  const postContainer = document.querySelector(".single-post-container");

  postContainer.append(singlePost(postData), postComments(postData));

}

function singlePost(post) {
  let singlePost = document.createElement("div");
  singlePost.classList.add("post-title-wrapper");
  const { title, body } = post;
  const { name } = post.user;
  singlePost.innerHTML = `    <h2>Post Title: ${firstLetterUpper(title)}</h2>
                                <span>Author Name:<a href='user.html'> ${firstLetterUpper(name)}</a></span>
                                <p>Post body: ${firstLetterUpper(body)}</p>
                                <a href='posts.html'>Kiti autoriaus irasai</a>
                              `;


                              console.log(singlePost)
  return singlePost;
}


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

init();