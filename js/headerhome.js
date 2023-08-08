const navHome = document.getElementById("nav-home");
const scrollTop = document.querySelector(".scroll");
window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    navHome.classList.add("nav-home");
    navHome.classList.remove("nav-home-transparent");
    scrollTop.classList.add("scroll-top");
  } else {
    navHome.classList.add("nav-home-transparent");
    navHome.classList.remove("nav-home");
    scrollTop.classList.remove("scroll-top");
  }
});