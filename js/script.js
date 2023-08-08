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

// function getQueryParams() {
//   let query = window.location.search;
//   let params = new URLSearchParams(query);
//   let url = params.get("q");

//   return url;
// }

// function defaultCondition() {
//   let query = window.location.search;
//   const specificMenu = document.querySelectorAll("specific-menu");
//   let params = new URLSearchParams(query);
//   let url = params.has("q");

//   switch (url) {
//     case false:
//       specificMenu.style.display = "block";
//       break;
//     default:
//       tea();
//       nonCoffee();
//       coffee();
//   }

//   return specificMenu;
// }

// function coffee() {
//   const coffeeList = document.querySelectorAll(".coffee");
//   coffeeList.forEach((coff) => {
//     if (getQueryParams() === "coffee") {
//       coff.style.display = "block";
//     } else {
//       coff.style.display = "none";
//     }
//   });
// }

// function nonCoffee() {
//   const nonCoffee = document.querySelectorAll(".non-coffee");
//   nonCoffee.forEach((nonCoff) => {
//     if (getQueryParams() === "non-coffee") {
//       nonCoff.style.display = "block";
//     } else {
//       nonCoff.style.display = "none";
//     }
//   });
// }

// function tea() {
//   const tea = document.querySelectorAll(".tea");
//   tea.forEach((teaList) => {
//     if (getQueryParams() === "tea") {
//       teaList.style.display = "block";
//     } else {
//       teaList.style.display = "none";
//     }
//   });
// }

// defaultCondition();

//Active Bar Header
const path = location.pathname;
console.log(path)
console.log(window.location)


// Accordion
// const accordion = document.querySelectorAll(".accordion");
// const subUnit = document.querySelectorAll(".sub");
// subUnit

// accordion.forEach((acc,key) => {
//   // const subUnit = document.querySelectorAll(".sub");
//     acc.addEventListener("click", function() {
      
//     })
// })