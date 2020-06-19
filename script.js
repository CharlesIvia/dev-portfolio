//Scroll reveal

window.sr = ScrollReveal();

sr.reveal(".project-title", {
  origin: "bottom",
  duration: 1500,
  distance: "25rem",
  delay: 400,
});
sr.reveal(".project-title-two", {
  origin: "bottom",
  duration: 1500,
  distance: "25rem",
  delay: 400,
});

const mobileMenu = document.querySelector(".mobile-menu");
let header = document.querySelector("header");

mobileMenu.addEventListener("click", () => {
  header.classList.toggle("active");
});
