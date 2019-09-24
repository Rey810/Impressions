const upArrow = document.querySelector('.upArrow');
const home = document.querySelector('.articleLand');
const footer = document.querySelector('footer');

function delayedScroll() {
    window.setTimeout(scrollToHome, 750);
}

function scrollToHome() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


upArrow.addEventListener('click', delayedScroll);

