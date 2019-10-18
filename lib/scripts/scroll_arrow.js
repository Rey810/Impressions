const upArrow = document.querySelector('.upArrow');
const home = document.querySelector('.landingPage');
const callToAction = document.querySelector('.callToAction');
const introPage = document.querySelector('.intro');
const landContact = document.querySelector('.menuButton');
const footer = document.querySelector('footer');
const headerExplore = document.querySelector(".introHeader");
const logo = document.querySelector('.logo');
const scrollToPosition = introPage.offsetTop - (headerExplore.clientHeight);

function delayedScroll() {
    window.setTimeout(scrollToHome, 750);
}

function scrollToHome() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function scrollToIntro() {
    console.log(scrollToPosition);
    window.scrollTo({
        top: scrollToPosition
    });

}

function scrollToFooter() {
    footer.scrollIntoView(true);
}

landContact.addEventListener('click', scrollToFooter);
upArrow.addEventListener('click', delayedScroll);
callToAction.addEventListener('click', scrollToIntro);
logo.addEventListener('click', scrollToIntro);
