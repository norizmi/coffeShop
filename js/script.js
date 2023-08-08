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
