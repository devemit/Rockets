const logo = document.querySelector("#logo");

// Back to top

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
logo.addEventListener("click", function () {
  topFunction();
});

// mobile

function changeVisibleMenu() {
  const mobile = document.querySelector("#menu");
  const nav = document.querySelector("#nav");

  mobile.classList.toggle("active");
  nav.classList.toggle("active");
}
