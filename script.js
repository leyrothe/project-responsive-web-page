const hamburger = document.querySelector('#icon img');
const navList = document.querySelector('.nav-list');
const navContainer = document.querySelector('.nav-container');
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');
const topOffset = 200;

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

// mark active link when clicked in nav menu
navItems.forEach(item => {
  item.addEventListener('click',() => {
    navItems.forEach(i => {
      // remove class active from each item
      i.classList.remove('active');
    });
    // add active class to clicked item
    item.classList.add('active');
    navContainer.classList.remove('navigation-mobile');
    navList.classList.remove('nav-list-mobile');
  })
});

// go through sections and add to corresponding nav item active class
window.addEventListener('scroll', () => {
  navItems.forEach(item => {
    item.classList.remove('active');
  });

  // from About Us to Reviews section thus index goes from 1 to 6
  for (let i = 1; i < 6; i++) {
    const section = sections[i];
    // set active on actual section and check if the scroll is above 6th section (images-section)
    if (window.scrollY >= section.offsetTop - topOffset && window.scrollY < sections[6].offsetTop - topOffset) {
      navItems.forEach(item => {
        item.classList.remove('active');
      });

      navItems[i-1].classList.add('active');
    }
  } 
});
