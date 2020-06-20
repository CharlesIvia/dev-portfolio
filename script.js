//Scroll reveal

window.sr = ScrollReveal();

sr.reveal(".project-title", {
  origin: "bottom",
  duration: 1500,
  distance: "25rem",
  delay: 400,
});
sr.reveal(".skills-innerbox", {
  origin: "bottom",
  duration: 1500,
  distance: "25rem",
  delay: 300,
});
sr.reveal(".project-title-two", {
  origin: "bottom",
  duration: 1500,
  distance: "25rem",
  delay: 400,
});
sr.reveal(".apple-small-div", {
  origin: "left",
  duration: 1500,
  distance: "25rem",
  delay: 400,
});
sr.reveal(".rosa-small-div", {
  origin: "left",
  duration: 1500,
  distance: "25rem",
  delay: 400,
});
sr.reveal(".budget-small-div", {
  origin: "left",
  duration: 1500,
  distance: "25rem",
  delay: 400,
});
sr.reveal(".apple-headline", {
  origin: "right",
  duration: 1500,
  distance: "25rem",
  delay: 300,
});
sr.reveal(".text-description", {
  origin: "right",
  duration: 1500,
  distance: "25rem",
  delay: 400,
});

const mobileMenu = document.querySelector(".mobile-menu");
let header = document.querySelector("header");

mobileMenu.addEventListener("click", () => {
  header.classList.toggle("active");
});
