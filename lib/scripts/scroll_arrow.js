const upArrow = document.querySelector('.upArrow');
const home = document.querySelector('.landingPage');
const downArrow = document.getElementById('downArrow');
const introPage = document.querySelector('.intro');

function delayedScroll() {
    window.setTimeout(scrollToHome, 750);
}

function scrollToHome() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function scrollToIntro() {
    introPage.scrollIntoView(true);
}



upArrow.addEventListener('click', delayedScroll);
downArrow.addEventListener('click', scrollToIntro);