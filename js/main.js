// Menu toggle functionality
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

menuToggle.addEventListener("click", () => {
  // Toggle mobile menu
  mobileMenu.classList.toggle("show");

  // Toggle between hamburger and X icons
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove("show");

    // Reset to hamburger icon
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-times");
  }
});

function toggleMobileProducts() {
  const mobileProducts = document.getElementById("mobile-products");
  mobileProducts.classList.toggle("hidden");
}
