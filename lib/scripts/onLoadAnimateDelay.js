const body = document.body


function loadAnimate() {
    body.classList.add('loaded');
    body.classList.remove("preload");
}

window.addEventListener("load", loadAnimate);