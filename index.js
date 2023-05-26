import { navigationGenerator } from "./navigation.js";

function init () {
    let body = document.querySelector('body')
    body.prepend(navigationGenerator())
}

init ()