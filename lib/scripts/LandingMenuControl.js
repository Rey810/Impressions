// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

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
