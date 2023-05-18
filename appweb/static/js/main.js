const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const aside= document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleaside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');    
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleaside(){
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
}


