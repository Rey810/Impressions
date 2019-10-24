const body = document.body


function loadAnimate() {
    body.classList.add('loaded');
    body.removeAttribute('id');
}

window.addEventListener("load", loadAnimate);