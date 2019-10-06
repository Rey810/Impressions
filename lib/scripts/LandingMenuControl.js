const menuClose = document.getElementById('menuClose');
const menuOverlay = document.querySelector('.menuOverlay');
const introMenu1 = document.getElementById('intromenu1');
const introMenu2 = document.getElementById('intromenu2');


function open() {
    console.log("Menu should slide in");
    menuOverlay.classList.add('menuSlideIn');
}

function close() {
    menuOverlay.classList.remove('menuSlideIn');
}



menuClose.addEventListener('click', close);
introMenu1.addEventListener('click', open);
introMenu2.addEventListener('click', open);