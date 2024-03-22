let navbar = document.querySelector("nav");
let scrolled = false;

window.onscroll = function () {
  if (window.scrollY > 50 && !scrolled) {
    navbar.style.backgroundColor = ""; // Change color on scroll
    scrolled = true;
  } else if (window.scrollY <= 50 && scrolled) {
    navbar.style.backgroundColor = "white"; // Reset to initial color
    scrolled = false;
  }
};
