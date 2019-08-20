const upArrow = document.querySelector('.upArrow');
const home = document.querySelector('.landingPage');
const downArrow = document.getElementById('downArrow');
const introPage = document.querySelector('.intro');

function delayedScroll() {
    window.setTimeout(scrollToHome, 1600);
}

function scrollToHome() {
    home.scrollIntoView(true);
}

function scrollToIntro() {
    introPage.scrollIntoView(true);
}



upArrow.addEventListener('click', delayedScroll);
downArrow.addEventListener('click', scrollToIntro);