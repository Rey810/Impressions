const header = document.querySelector('.introHeader');
const container = document.querySelector('.articleContainer');
const topOfContainer = container.offsetTop;
const headerHeight = header.clientHeight;

function ColourChange() {
    console.log(topOfContainer, window.scrollY);
    console.log(headerHeight);
    if ((topOfContainer - headerHeight) <= window.scrollY) {
        header.style.backgroundColor = 'black';
    } else header.style.backgroundColor = 'unset';
}

window.addEventListener('scroll', ColourChange);