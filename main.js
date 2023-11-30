import "./dist/style.css";

const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");
const navbar = document.querySelector("#navbar");

openMenu.addEventListener("click", () => {
  openMenu.classList.replace("block", "hidden");
  closeMenu.classList.replace("hidden", "block");
  navbar.classList.replace("hidden", "flex");
});

closeMenu.addEventListener("click", () => {
  openMenu.classList.replace("hidden", "block");
  closeMenu.classList.replace("block", "hidden");
  navbar.classList.replace("flex", "hidden");
});
