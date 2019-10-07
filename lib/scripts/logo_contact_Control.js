const logo = document.querySelector('.logo');
const intro = document.querySelector('.intro');

const contact = document.querySelector('.menuButton');
const footerContact = document.getElementsByName('footer');


function scrollToIntro() {
    intro.scrollIntoView(true);
}

function scrollToFooter() {
    footerContact.scrollIntoView(true);
}

logo.addEventListener('click', scrollToIntro);
contact.addEventListener('click', scrollToFooter);
