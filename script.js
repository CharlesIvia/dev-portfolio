(window.sr = ScrollReveal()),
  sr.reveal(".project-title", {
    origin: "bottom",
    duration: 1500,
    distance: "25rem",
    delay: 400,
  }),
  sr.reveal(".skills-innerbox", {
    origin: "bottom",
    duration: 1000,
    distance: "5rem",
    delay: 300,
  }),
  sr.reveal(".project-title-two", {
    origin: "bottom",
    duration: 1500,
    distance: "25rem",
    delay: 500,
  }),
  sr.reveal(".apple-small-div", {
    origin: "left",
    duration: 1000,
    distance: "5rem",
    delay: 300,
  }),
  sr.reveal(".rosa-small-div", {
    origin: "left",
    duration: 1000,
    distance: "5rem",
    delay: 300,
  }),
  sr.reveal(".budget-small-div", {
    origin: "left",
    duration: 1000,
    distance: "5rem",
    delay: 300,
  }),
  sr.reveal(".apple-headline", {
    origin: "right",
    duration: 1000,
    distance: "5rem",
    delay: 300,
  }),
  sr.reveal(".text-description", {
    origin: "right",
    duration: 1000,
    distance: "5rem",
    delay: 300,
  });
const mobileMenu = document.querySelector(".mobile-menu");
let header = document.querySelector("header");
mobileMenu.addEventListener("click", () => {
  header.classList.toggle("active");
});

let wrapper;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function writingAll(stringTarget, container) {
  wrapper = document.querySelector('[' + container + ']');
  const stringsContainer = document.getElementsByClassName(stringTarget);

  while (wrapper) {
    for (i = 0; i < stringsContainer.length; i++) {
      const string = stringsContainer[i].textContent;
      await write(string);
      await sleep(1000);
      await erase();
      await sleep(1000);
    };
  }
};

async function write(text) {
  let index = 0;
  while (index < text.length) {
    const timeout = 100;
    await sleep(timeout);
    index++;
    wrapper.innerHTML = text.substring(0, index);
  }
};


async function erase() {
  while (wrapper.textContent.length) {
    const timeout = 100;
    await sleep(timeout);
    wrapper.textContent = wrapper.textContent.substring(0, wrapper.textContent.length - 2);
  }
};

writingAll('item', 'data-text');