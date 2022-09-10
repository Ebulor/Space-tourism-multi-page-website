const openMenu = document.querySelectorAll(".toggle-menu");
const nav = document.querySelector(".navbar");

openMenu.forEach((btn) => {
  btn.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
});
