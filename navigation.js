export function navigationGenerator() {

  const headerElement = document.createElement('header');

  const searchForm = document.createElement('form');
  searchForm.classList.add('search-form')
  searchForm.action = './search.html';

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.name = 'search';
  searchInput.id = 'search';

  const searchButton = document.createElement('button');
  searchButton.type = 'submit';
  searchButton.textContent = 'Search';

  searchForm.append(searchInput, searchButton);

  const navigationElement = document.createElement('nav');
  navigationElement.classList.add('main-navigation');

  headerElement.append(navigationElement);

  const menuList = document.createElement('ul');
  menuList.classList.add('menu', 'main-menu');

  navigationElement.append(menuList,searchForm);

  const menuItems = [
    {
      title: 'Home',
      path: ''
    },
    {
      title: 'Users',
      path: 'users.html'
    },
    {
      title: 'Posts',
      path: 'posts.html'
    },
    {
      title: 'Albums',
      path: 'albums.html'
    }
  ];

  menuItems.forEach(item => {
    let { title, path } = item;

    const menuItem = document.createElement('li');
    menuList.append(menuItem);
  
    const menuLink = document.createElement('a');

    if (location.pathname === '/' + path) {
      menuLink.classList.add('active');
    }

    menuItem.append(menuLink);
  
    menuLink.textContent = title;
    menuLink.href = './' + path;
  })

  return headerElement
}



export function navigationFilter() {
    
}