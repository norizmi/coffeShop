const path = window.location.pathname;
const url = path.slice(6);
const headerBar = document.querySelectorAll("ul li a[href]");

headerBar.forEach(bar => {
        let link = bar.href;
        if(link.slice(27) === url) {
            bar.classList.toggle("active-header");
        }
})
