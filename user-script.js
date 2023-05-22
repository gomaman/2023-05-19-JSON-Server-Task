//!  5. Sukurti naują puslapį user.html, kuriame bus atvaizduojama vartotojo informacija:
//!  5.1. Pilnas vardas.
//!  5.2. Vartotojo vardas / nick'as.
//!  5.3. El. paštas.
//!  5.4. Adresas, kuris turės gatvę, namo numerį, miestą, pašto kodą. Paspaudus ant adreso, pagal koordinates, turėtų atidaryti šios vietos Google Maps.
//!  5.5. Telefono numeris.
//!  5.6. Internetinio puslapio adresas.
//!  5.7. Įmonės, kurioje dirba, pavadinimas.


async function init() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    let userData = await response.json()
    singleUserGenerator(userData)
}

function singleUserGenerator(userData){
    console.log(userData)

    let name = userData.name
    let username = userData.username
    let email = userData.email
    let address = userData.address
    let phone = userData.phone
    let website = userData.website
    let companyName = userData.company.name

    let userItemContainer = document.createElement('div')
    userItemContainer.classList.add('user-item-container')
    
    let userUnorderedList = document.createElement('ul')

    let nameItem = document.createElement('li')
    let usernameItem = document.createElement('li')
    let emailItem = document.createElement('li')
    let addressItem = document.createElement('li')
    let phoneItem = document.createElement('li')
    let websiteItem = document.createElement('li')
    let companyNameItem = document.createElement('li')

    userUnorderedList.append(nameItem,usernameItem,emailItem,addressItem,phoneItem,websiteItem,companyNameItem)

    nameItem.textContent= name
    usernameItem.textContent = username
    emailItem.textContent = email
    addressItem.textContent = address //susitvarkyt map'a 
    phoneItem.textContent = phone
    websiteItem.textContent = website
    companyNameItem.textContent = companyName
}



init()