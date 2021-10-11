
const burgerButton = document.querySelector('.burger_button');
const burgerMenu = document.querySelector('.burger_menu');
const burgerClose = document.querySelector('.burger_menu_close');


burgerButton.addEventListener('click', () => {
   burgerMenu.classList.add('active');
});

burgerClose.addEventListener('click', () => {
   burgerMenu.classList.remove('active');
   console.log('hello');
});