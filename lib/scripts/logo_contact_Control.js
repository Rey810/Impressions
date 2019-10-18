const contact = document.querySelector('.menuButton');
const footerContact = document.getElementsByName('footer');

function scrollToFooter() {
    footerContact.scrollIntoView(true);
}

logo.addEventListener('click', scrollToIntro);
contact.addEventListener('click', scrollToFooter);
