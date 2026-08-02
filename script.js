// Riverside Coffee Co. — mobile nav toggle only.
// No content on this site is created, fetched, or rendered by JavaScript;
// every heading, paragraph, image, and link lives directly in each page's HTML.
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});
