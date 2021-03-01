const hamburguer = document.querySelector(".header-responsive__hamburguer");
console.log(hamburguer);
const menuResponsive = document.querySelector(".navegacion-responsive");
const header = document.querySelector(".header-responsive__barra");
const navElements = document.querySelectorAll(".navegacion-responsive__enlace");
addEventListeners();
function addEventListeners() {
  hamburguer.addEventListener("click", () => {
    if (menuResponsive.classList.contains("active")) {
      menuResponsive.classList.remove("active");
      header.classList.remove("dark");
    } else {
      menuResponsive.classList.add("active");
      header.classList.add("dark");
    }
  });
  navElements.forEach((nav) => {
    nav.addEventListener("click", () => {
      if (menuResponsive.classList.contains("active")) {
        header.classList.remove("dark");
        menuResponsive.classList.remove("active");
      }
    });
  });
}
