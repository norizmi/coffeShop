const accordion = document.querySelectorAll(".accordion");
accordion.forEach((acc) => {
  acc.addEventListener("click", () => {
    const sub = acc.children;
    const panel = sub[2];
    const arrow = sub[1];

    if(panel.style.display === "block") {
      panel.style.display = "none";
      arrow.style.transform = "rotate(180deg)";
    } else {
      panel.style.display = "block";
      arrow.style.transform = "rotate(90deg)";
    }
  });
});
