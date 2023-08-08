function getQueryParams() {
    let query = window.location.search;
    let params = new URLSearchParams(query);
    let url = params.get("q");
  
    return url;
  }
  
  function defaultCondition() {
    let query = window.location.search;
    const specificMenu = document.querySelectorAll("specific-menu");
    let params = new URLSearchParams(query);
    let url = params.has("q");
  
    switch (url) {
      case false:
        specificMenu.style.display = "block";
        break;
      default:
        tea();
        nonCoffee();
        coffee();
    }
  
    return specificMenu;
  }
  
  function coffee() {
    const coffeeList = document.querySelectorAll(".coffee");
    coffeeList.forEach((coff) => {
      if (getQueryParams() === "coffee") {
        coff.style.display = "block";
      } else {
        coff.style.display = "none";
      }
    });
  }
  
  function nonCoffee() {
    const nonCoffee = document.querySelectorAll(".non-coffee");
    nonCoffee.forEach((nonCoff) => {
      if (getQueryParams() === "non-coffee") {
        nonCoff.style.display = "block";
      } else {
        nonCoff.style.display = "none";
      }
    });
  }
  
  function tea() {
    const tea = document.querySelectorAll(".tea");
    tea.forEach((teaList) => {
      if (getQueryParams() === "tea") {
        teaList.style.display = "block";
      } else {
        teaList.style.display = "none";
      }
    });
  }
  
  defaultCondition();