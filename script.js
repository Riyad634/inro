const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('header nav .button');

menuToggle.addEventListener('click', () => menu.classList.toggle('open'));

// close the menu after tapping a link
menu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => menu.classList.remove('open'))
);