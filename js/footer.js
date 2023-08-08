const accordion = document.querySelectorAll(".accordion") 

accordion.forEach(acc => {
    acc.addEventListener("click", function() {
     const panel = this.nextElementSibling;
     const arrow = acc.querySelector("img")
      if (panel.style.display === "block") {
        panel.style.display = "none";
        arrow.style.transform = "rotate(180deg)";
      } else {
        panel.style.display = "block";
        arrow.style.transform = "rotate(90deg)";
      }
    })
})