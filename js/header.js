const path = window.location.pathname;
const url = path.slice(-9);
const headerBar = document.querySelectorAll("ul li a[href]");

headerBar.forEach(bar => {
        let link = bar.href;
        if(link.slice(-9) === url) {
            bar.classList.toggle("active-header");
        }
})
