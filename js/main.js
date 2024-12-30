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

document.addEventListener("DOMContentLoaded", () => {
  // Get all navigation links
  const navLinks = document.querySelectorAll('nav a:not([href="#"])');

  // Add click handler to each link
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Remove active class from all links
      navLinks.forEach((l) => l.classList.remove("active"));
      // Add active class to clicked link
      e.target.classList.add("active");
    });

    // Set active class for current page
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
});

function handleResize() {
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileProducts = document.getElementById("mobile-products");
  const menuIcon = document.getElementById("menu-icon");

  // Check if window width is greater than or equal to 768px (md breakpoint in Tailwind)
  if (window.innerWidth >= 768) {
    mobileMenu.classList.remove("show");
    mobileProducts.classList.add("hidden");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
}

// Add event listener for window resize
window.addEventListener("resize", handleResize);
