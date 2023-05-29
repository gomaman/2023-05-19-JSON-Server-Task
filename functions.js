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

