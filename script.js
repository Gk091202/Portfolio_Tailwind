// Portfolio Website JavaScript Functions
// Secure and optimized for performance

docu; // Enhanced modal controls
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const overlay = document.getElementById("resumeOverlay");
    if (overlay && !overlay.classList.contains("hidden")) {
      closeResumeModal(true); // Fast close with Escape key
    }
  }
});

// Improved click outside detection
document.addEventListener("click", function (event) {
  const overlay = document.getElementById("resumeOverlay");
  const modal = document.getElementById("resumeModal");

  if (overlay && modal && !overlay.classList.contains("hidden")) {
    // Check if click is outside the modal content
    if (!modal.contains(event.target) && overlay.contains(event.target)) {
      closeResumeModal(true); // Fast close when clicking outside
    }
  }
});

// Prevent modal from closing when clicking inside the PDF or modal content
document.addEventListener("click", function (event) {
  const modal = document.getElementById("resumeModal");
  if (modal && modal.contains(event.target)) {
    event.stopPropagation();
  }
});

// Touch support for mobile devices
document.addEventListener("touchstart", function (event) {
  const overlay = document.getElementById("resumeOverlay");
  const modal = document.getElementById("resumeModal");

  if (overlay && modal && !overlay.classList.contains("hidden")) {
    // Check if touch is outside the modal content
    if (!modal.contains(event.target) && overlay.contains(event.target)) {
      closeResumeModal(true); // Fast close when touching outside
    }
  }
});

// Prevent modal from closing when touching inside the modal content
document.addEventListener("touchstart", function (event) {
  const modal = document.getElementById("resumeModal");
  if (modal && modal.contains(event.target)) {
    event.stopPropagation();
  }
});
ventListener("DOMContentLoaded", function () {
  // Mobile menu functionality
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const closeBtn = document.getElementById("close-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileBackdrop = document.getElementById("mobile-backdrop");

  if (hamburgerBtn && closeBtn && mobileMenu && mobileBackdrop) {
    // Toggle the menu visibility when the hamburger button is clicked
    hamburgerBtn.addEventListener("click", function () {
      mobileMenu.style.display = "block";
      mobileBackdrop.style.display = "block";
      document.body.style.overflow = "hidden"; // Prevent background scroll
    });

    // Close the menu when the close button is clicked
    closeBtn.addEventListener("click", function () {
      mobileMenu.style.display = "none";
      mobileBackdrop.style.display = "none";
      document.body.style.overflow = "auto"; // Re-enable scroll
    });

    // Close the menu if the backdrop is clicked
    mobileBackdrop.addEventListener("click", function () {
      mobileMenu.style.display = "none";
      mobileBackdrop.style.display = "none";
      document.body.style.overflow = "auto"; // Re-enable scroll
    });
  }

  // Resume modal functionality with enhanced animations
  window.openResumeModal = function () {
    const overlay = document.getElementById("resumeOverlay");
    const modal = document.getElementById("resumeModal");

    if (overlay && modal) {
      // Prevent background scroll
      document.body.style.overflow = "hidden";

      // Show overlay
      overlay.classList.remove("hidden");
      overlay.classList.add("flex");

      // Force reflow for smooth animation
      overlay.offsetHeight;

      // Animate in
      requestAnimationFrame(function () {
        overlay.classList.remove("hide");
        overlay.classList.add("show");
        modal.classList.remove("hide");
        modal.classList.add("show");
      });
    }
  };

  window.closeResumeModal = function (fastClose = false) {
    const overlay = document.getElementById("resumeOverlay");
    const modal = document.getElementById("resumeModal");

    if (overlay && modal) {
      // Add fast close classes if needed for instant response
      if (fastClose) {
        overlay.classList.add("fast-close");
        modal.classList.add("fast-close");
      }

      // Animate out
      overlay.classList.remove("show");
      overlay.classList.add("hide");
      modal.classList.remove("show");
      modal.classList.add("hide");

      // Hide after animation completes
      const delay = fastClose ? 150 : 400;
      setTimeout(function () {
        overlay.classList.add("hidden");
        overlay.classList.remove("flex", "fast-close");
        modal.classList.remove("fast-close");
        document.body.style.overflow = "auto"; // Re-enable scroll
      }, delay);
    }
  };

  // Close modal with Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      const overlay = document.getElementById("resumeOverlay");
      if (overlay && !overlay.classList.contains("hidden")) {
        closeResumeModal();
      }
    }
  });

  // Form validation for contact form
  const contactForm = document.querySelector('form[action*="formspree"]');
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const email = contactForm.querySelector('input[name="email"]');
      const firstName = contactForm.querySelector('input[name="first-name"]');
      const message = contactForm.querySelector('textarea[name="message"]');

      // Basic validation
      if (!email || !firstName || !message) {
        e.preventDefault();
        alert("Please fill in all required fields.");
        return false;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
        e.preventDefault();
        alert("Please enter a valid email address.");
        return false;
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add loading states for external links
  document.querySelectorAll('a[href^="http"]').forEach(function (link) {
    link.addEventListener("click", function () {
      // Add loading indicator for external links
      const originalText = this.textContent;
      this.textContent = "Loading...";

      setTimeout(function () {
        link.textContent = originalText;
      }, 2000);
    });
  });
});
