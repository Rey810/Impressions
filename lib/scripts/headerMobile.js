const header = document.querySelector('.introHeader');
const container = document.querySelector('.articleContainer');
const topOfContainer = container.offsetTop;

function ColourChange() {
    console.log(topOfContainer, window.scrollY);
    if (topOfContainer <= window.scrollY) {
        header.style.backgroundColor = 'black';
    } else header.style.backgroundColor = 'unset';
}

window.addEventListener('scroll', ColourChange);