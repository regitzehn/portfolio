const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

// scroll m. knapper

// knap-start

document.querySelector(".knap-start").addEventListener("click", function () {
  const nowSection = document.querySelector(".knap-start").closest("section");
  const nextSection = nowSection.nextElementSibling;

  if (nextSection) {
    nextSection.scrollIntoView();
  }
});

// knap-web

document.querySelector(".knap-web").addEventListener("click", function () {
  const nowSection = document.querySelector(".knap-web").closest("section");
  const nextSection = nowSection.nextElementSibling;

  if (nextSection) {
    nextSection.scrollIntoView();
  }
});

// knap-uxui

document.querySelector(".knap-uxui").addEventListener("click", function () {
  const nowSection = document.querySelector(".knap-uxui").closest("section");
  const nextSection = nowSection.nextElementSibling;

  if (nextSection) {
    nextSection.scrollIntoView();
  }
});

// knap-ani

document.querySelector(".knap-ani").addEventListener("click", function () {
  const nowSection = document.querySelector(".knap-ani").closest("section");
  const nextSection = nowSection.nextElementSibling;

  if (nextSection) {
    nextSection.scrollIntoView();
  }
});
