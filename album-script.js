//?8. Sukurti naują puslapį album.html ir jame atvaizduoti:
//?  8.1. Albumo pavadinimą.
//?  8.2. Album autoriaus vardą. Paspaudus ant vardo - nukreipiama į autoriaus puslapį.
//?  8.3. Skiltis, kurioje atvaizduojamos visos albumo nuotraukos. Panaudoti library (biblioteką), kuri skirta gražiam galerijos atvaizdavimui, pvz.:
//?    8.3.1. https://photoswipe.com/
//?    8.3.2. https://nanogallery2.nanostudio.org/
//?    8.3.3. https://sachinchoolur.github.io/lightgallery.js/
//?    8.3.4. Arba bet kurią kitą.


async function init() {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1?_embed=photos&_expand=user"
    );
    let postData = await response.json();
    const postContainer = document.querySelector("#container");
    console.log(postData)
    postContainer.append();
  }



  init()