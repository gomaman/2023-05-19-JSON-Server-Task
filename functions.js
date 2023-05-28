export async function fetchData(url) {
    const res = await fetch(url)
    const data = await res.json()
    return data 
}

export function getUrlParams(param) {
    const queryParams = location.search
    const urlParams = new URLSearchParams(queryParams)
    const value = urlParams.get(param)

    return value
}

export function firstLetterUpper(string) {
    let firstLetter = string.at(0).toUpperCase()
    let otherLetters = string.slice(1)
    let neatWord = firstLetter + otherLetters
    return neatWord 
}


export function createHTMLElement(type, className, text) {
    const element = document.createElement(type);
    if (className) {
       element.classList.add(className);
    } 

    if (text) {
        element.textContent = text;
    }

    return element;
}

export function createUser (searchDataUser) {
    const userInfoContainer = document.createElement("div");
    const userInfoUl = document.createElement("ul");
    userInfoContainer.append(userInfoUl);
    userInfoContainer.classList.add("user-answer-container");
  
    let searchingFor = getUrlParams("search");

    const foundUsers = searchDataUser
  
    // if (foundUsers.length < 1) {
    //   userInfoUl.append(
    //     createHTMLElement(
    //       "span",
    //       "error",
    //       `No Users Found with "${searchingFor}"`
    //     )
    //   );
    // } else if (searchingFor !== "") {
    //   userInfoUl.append(
    //     createHTMLElement(
    //       "h1",
    //       "section-title",
    //       `"${searchingFor}" in User Names:`
    //     )
    //   );
    //   foundUsers.forEach((user) => {
    //     const { id, name, username, email } = user;
    //     const userAnswerLiContainer = document.createElement("li");
    //     userAnswerLiContainer.innerHTML = `<a href='/user.html?user_id=${id}'>${name}</a>`;
    //     userInfoUl.append(userAnswerLiContainer);
    //   });
    // } else {
      userInfoUl.append(createHTMLElement("h1", "section-title", `User Names:`));
      foundUsers.forEach((user) => {
        const { id, name, username, email } = user;
        const userAnswerLiContainer = document.createElement("li");
        userAnswerLiContainer.innerHTML = `<a href='/user.html?user_id=${id}'>${name}</a>`;
        userInfoUl.append(userAnswerLiContainer);
      });
    // }

    return userInfoContainer
}
