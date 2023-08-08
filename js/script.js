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

const contentWrapper = document.querySelectorAll(".content-wrapper");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("slide-right", entry.isIntersecting);
    entry.isIntersecting ? observer.unobserve(entry.target) : false;
  });
});

contentWrapper.forEach((content) => {
  observer.observe(content);
});


// Accordion
// const accordion = document.querySelectorAll(".accordion");
// const subUnit = document.querySelectorAll(".sub");
// subUnit

// accordion.forEach((acc,key) => {
//   // const subUnit = document.querySelectorAll(".sub");
//     acc.addEventListener("click", function() {
      
//     })
// })