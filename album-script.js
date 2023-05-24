async function init() {
  const queryParams = location.search;
  const urlParams = new URLSearchParams(queryParams);
  const id = urlParams.get("album_id");

  let response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${id}?_embed=photos&_expand=user`
  );
  let albumData = await response.json();
  const albumContainer = document.querySelector("#container");
  console.log(albumData);
  albumContainer.append(albumGenerator(albumData));
}

function albumGenerator(data) {
  let albumDescription = document.createElement("div");
  let photosContainer = document.createElement("div");
  photosContainer.classList.add("pswp-gallery");
  photosContainer.classList.add("pswp-gallery--single-column");
  photosContainer.id = "gallery-wrapper";

  let { title, photos } = data;
  let { name, id } = data.user;

  albumDescription.innerHTML = `<h2>  ${title}</h2>
                                  <span><a href="/user.html?user_id=${id}">${name}</a></span>
    `;
  albumDescription.append(photosContainer);

  photos.forEach((photo) => {
    let singlePhotoContainer = document.createElement("a");
    singlePhotoContainer.href = photo.url;
    let singlePhoto = document.createElement("img");
    singlePhoto.src = photo.thumbnailUrl;

    singlePhotoContainer.dataset.pswpWidth = "600";
    singlePhotoContainer.dataset.pswpHeight = "600";

    singlePhoto.setAttribute("value", "_blank");
    singlePhotoContainer.append(singlePhoto);
    photosContainer.append(singlePhotoContainer);
  });

  return albumDescription;
}

init();
