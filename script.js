const hamburger = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});
