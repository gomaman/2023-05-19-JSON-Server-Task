export async function fetchData(url) {
    const res = await fetch(url)
    const data = await res.json()
    return data 
}

export function firstLetterUpper(string) {
    let firstLetter = string.at(0).toUpperCase()
    let otherLetters = string.slice(1)
    let neatWord = firstLetter + otherLetters
    return neatWord 
}