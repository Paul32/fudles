const menu = document.querySelector
   ('.navbar');

const cross = document.querySelector('.cross');
menu.addEventListener('click', () => {
   cross.classList.toggle("change");
})