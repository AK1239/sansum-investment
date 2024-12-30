// Menu toggle functionality
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerLines = document.querySelectorAll(".hamburger-line");

menuToggle.addEventListener("click", () => {
  // Toggle mobile menu
  mobileMenu.classList.toggle("hidden");

  // Animate hamburger to X
  hamburgerLines[0].classList.toggle("rotate-45");
  hamburgerLines[0].classList.toggle("translate-y-2");
  hamburgerLines[1].classList.toggle("opacity-0");
  hamburgerLines[2].classList.toggle("-rotate-45");
  hamburgerLines[2].classList.toggle("-translate-y-2");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.add("hidden");

    // Reset hamburger animation
    hamburgerLines[0].classList.remove("rotate-45", "translate-y-2");
    hamburgerLines[1].classList.remove("opacity-0");
    hamburgerLines[2].classList.remove("-rotate-45", "-translate-y-2");
  }
});

function toggleMobileProducts() {
  const mobileProducts = document.getElementById("mobile-products");
  mobileProducts.classList.toggle("hidden");
}
