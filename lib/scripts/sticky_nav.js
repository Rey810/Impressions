//defines position at which scroll bar gets sticky
const header = document.querySelector(".introHeader");
const introSection = document.querySelector(".intro");
const topOfHeader = introSection.offsetTop; //gets the distance from top


function fixedHeader() {
  console.log(topOfHeader, window.scrollY);
  if (window.scrollY >= (topOfHeader - header.clientHeight)) {
    header.classList.add("fixedHeader");
  } else {
    header.classList.remove("fixedHeader");
  }
}

window.addEventListener("scroll", fixedHeader);
