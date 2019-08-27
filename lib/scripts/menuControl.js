const menuClose = document.getElementById('menuClose');
const menuOverlay = document.querySelector('.menuOverlay');
const introMenu = document.getElementById('intromenu');


function open() {
    menuOverlay.classList.add('menuSlideIn');
}

function close() {
    menuOverlay.classList.remove('menuSlideIn');
}



menuClose.addEventListener('click', close);
introMenu.addEventListener('click', open);