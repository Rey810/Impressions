const upArrow = document.querySelector('.upArrow');
const home = document.querySelector('.landingPage');
const callToAction = document.querySelector('.callToAction');
const introPage = document.querySelector('.intro');
const landContact = document.querySelector('.menuButton');
const footer = document.querySelector('footer');

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

function scrollToFooter() {
    footer.scrollIntoView(true);
}

landContact.addEventListener('click', scrollToFooter);
upArrow.addEventListener('click', delayedScroll);
callToAction.addEventListener('click', scrollToIntro);
