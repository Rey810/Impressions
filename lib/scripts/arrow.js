const footerArrow = document.querySelector('.upArrow')

function animate() {
    footerArrow.classList.add('animate');
    setTimeout(() => {
        footerArrow.classList.remove('animate');
    }, 1600);
}

footerArrow.addEventListener('click', animate);