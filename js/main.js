document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("hamburger-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });
});
