const footerArrow = document.querySelector('.arrow')

function animate() {
    footerArrow.classList.add('animate');
    setTimeout(() => {
        footerArrow.classList.remove('animate');
    }, 2000);
}

footerArrow.addEventListener('click', animate);