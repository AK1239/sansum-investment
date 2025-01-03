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

  handleScrollAnimation();
  startCountersWhenVisible();
});

function handleResize() {
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileProducts = document.getElementById("mobile-products");
  const menuIcon = document.getElementById("menu-icon");

  // Check if window width is greater than or equal to 768px
  if (window.innerWidth >= 768) {
    mobileMenu.classList.remove("show");
    mobileProducts.classList.add("hidden");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
}

// Add event listener for window resize
window.addEventListener("resize", handleResize);

function typeText() {
  const text = "Every Drop is a Gift from Nature";
  const typedTextElement = document.getElementById("typed-text");
  const cursor = document.querySelector(".cursor");
  let index = 0;

  function type() {
    if (index < text.length) {
      typedTextElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 65);
    } else {
      cursor.style.display = "none";
    }
  }

  type();
}

document.addEventListener("DOMContentLoaded", typeText);

function handleScrollAnimation() {
  const sections = document.querySelectorAll(".fade-in-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Only trigger animation when element meets threshold
        if (entry.intersectionRatio > (window.innerWidth < 768 ? 0.1 : 0.4)) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: window.innerWidth < 768 ? 0.1 : 0.4,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}

// Update observer when window resizes
window.addEventListener("resize", () => {
  handleScrollAnimation();
});

function animateCounter(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);

    // Use different formatting based on the size of the number
    const currentNumber = Math.floor(progress * (end - start) + start);
    if (end >= 1000) {
      element.textContent = (currentNumber / 1000).toFixed(1) + "K";
    } else {
      element.textContent = currentNumber;
    }

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function startCountersWhenVisible() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const yearsCounter = document.getElementById("yearsCounter");
          const customersCounter = document.getElementById("customersCounter");

          animateCounter(yearsCounter, 0, 5, 1000);
          animateCounter(customersCounter, 0, 10000, 1500);

          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  const statsContainer = document.querySelector(".absolute.bottom-4");
  if (statsContainer) {
    observer.observe(statsContainer);
  }
}

// Email functionality
function sendEmail(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      from_name: formData.get("firstName") + " " + formData.get("lastName"),
      reply_to: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    })
    .then(
      function (response) {
        alert("Message sent successfully!");
        form.reset();
      },
      function (error) {
        alert("Failed to send message. Please try again.");
      }
    );
}

// Initialize EmailJS
(function () {
  emailjs.init("YOUR_USER_ID");
})();
