const hamburger = document.querySelector('#icon img');
const navList = document.querySelector('.nav-list');
const navContainer = document.querySelector('.nav-container');

let navigationOpen = false;

hamburger.addEventListener('click',() => {
    /*toggle bool everytime hamburger icon is clicked*/
    navigationOpen = !navigationOpen;
    /*if navigation is open than add classes = show menu*/
    if(navigationOpen){
     navContainer.classList.add('navigation-mobile');
     navList.classList.add('nav-list-mobile');
     navList.style.display = 'flex';
    }else{
    /*else if navigation is closed remove classes = hide menu*/
     navContainer.classList.remove('navigation-mobile');
     navList.classList.remove('nav-list-mobile');
      navList.style.display = 'none'; 
    }
    
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 992) {
    // Desktop view
    navContainer.classList.remove('navigation-mobile');
    navList.classList.remove('nav-list-mobile');
    navList.style.display = 'flex';
    navigationOpen = false;
  } else {
    // Mobile view: hide nav unless explicitly opened
    if (!navigationOpen) {
      navList.style.display = 'none';
      navigationOpen = false;
    }
  }
});

