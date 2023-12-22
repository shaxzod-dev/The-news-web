const header = document.querySelector(".header-nav");
const burgerMenu = document.querySelector(".burger-menu");
burgerMenu.addEventListener("click", () => {
  header.classList.toggle("active");
  burgerMenu.classList.toggle("show");
});
