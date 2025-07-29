const hamburger = document.querySelector('#icon img');
const navList = document.querySelector('.nav-list');
const navContainer = document.querySelector('.nav-container');

let navigationOpen = false;

hamburger.addEventListener('click',() => {
    // toggle bool everytime hamburger icon is clicked
    navigationOpen = !navigationOpen;

    // if navigation is open then add classes = show menu
    if (navigationOpen) {
     navContainer.classList.add('navigation-mobile');
     navList.classList.add('nav-list-mobile');
    } else {
    // else if navigation is closed remove classes = hide menu
     navContainer.classList.remove('navigation-mobile');
     navList.classList.remove('nav-list-mobile');
    }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 992) {
    // remove mobile nav classes for desktop view
    navContainer.classList.remove('navigation-mobile');
    navList.classList.remove('nav-list-mobile');
  } 
  navigationOpen = false;
});