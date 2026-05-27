// SEO Results Page - Interactive Features and Animations
// ========================================================

// Chart configuration with consistent color scheme
const chartConfig = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        font: {
          family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          size: 13,
          weight: 600,
        },
        color: "#374151",
        padding: 20,
      },
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      padding: 16,
      cornerRadius: 12,
      titleFont: {
        size: 14,
        weight: 600,
      },
      bodyFont: {
        size: 13,
      },
      borderColor: "rgba(255, 255, 255, 0.1)",
      borderWidth: 1,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(0, 0, 0, 0.05)",
        drawBorder: false,
      },
      ticks: {
        color: "#6B7280",
        font: {
          size: 12,
        },
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#6B7280",
        font: {
          size: 12,
        },
      },
    },
  },
};

// Gradient colors for charts
const gradientColor = {
  purple: "#8b5cf6",
  pink: "#ec4899",
  blue: "#3b82f6",
  cyan: "#06b6d4",
  green: "#10b981",
  orange: "#f97316",
};

// Initialize all charts on page load
function initializeCharts() {
  // Organic Traffic Growth Chart
  const trafficCtx = document.getElementById("trafficChart");
  if (trafficCtx) {
    new Chart(trafficCtx, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Organic Traffic",
            data: [
              1200, 1800, 2500, 3200, 4100, 5200, 6800, 8500, 10200, 13500,
              16800, 21400,
            ],
            borderColor: gradientColor.purple,
            backgroundColor: "rgba(139, 92, 246, 0.05)",
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: gradientColor.purple,
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
          },
        ],
      },
      options: {
        ...chartConfig,
        plugins: {
          ...chartConfig.plugins,
          legend: {
            ...chartConfig.plugins.legend,
            display: false,
          },
        },
      },
    });
  }

  // Keywords Rankings Progress Chart
  const keywordsCtx = document.getElementById("keywordsChart");
  if (keywordsCtx) {
    new Chart(keywordsCtx, {
      type: "bar",
      data: {
        labels: ["Top 3", "Top 10", "Top 20", "Top 50", "Top 100"],
        datasets: [
          {
            label: "Keywords in Position",
            data: [156, 278, 412, 698, 1250],
            backgroundColor: [
              gradientColor.purple,
              gradientColor.pink,
              gradientColor.blue,
              gradientColor.cyan,
              gradientColor.green,
            ],
            borderRadius: 12,
            borderSkipped: false,
            hoverBackgroundColor: [
              "#7c3aed",
              "#db2777",
              "#1d4ed8",
              "#0891b2",
              "#059669",
            ],
          },
        ],
      },
      options: {
        ...chartConfig,
        plugins: {
          ...chartConfig.plugins,
          legend: {
            ...chartConfig.plugins.legend,
            display: false,
          },
        },
        indexAxis: undefined,
      },
    });
  }

  // Impressions vs Clicks Chart
  const impressionsCtx = document.getElementById("impressionsChart");
  if (impressionsCtx) {
    new Chart(impressionsCtx, {
      type: "line",
      data: {
        labels: [
          "Week 1",
          "Week 2",
          "Week 3",
          "Week 4",
          "Week 5",
          "Week 6",
          "Week 7",
          "Week 8",
        ],
        datasets: [
          {
            label: "Impressions",
            data: [25000, 28000, 32000, 35000, 38000, 40000, 42000, 45000],
            borderColor: gradientColor.pink,
            backgroundColor: "rgba(236, 72, 153, 0.05)",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: gradientColor.pink,
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointRadius: 5,
            yAxisID: "y",
          },
          {
            label: "Clicks",
            data: [1200, 1450, 1680, 1850, 2100, 2350, 2580, 2800],
            borderColor: gradientColor.blue,
            backgroundColor: "rgba(59, 130, 246, 0.05)",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: gradientColor.blue,
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointRadius: 5,
            yAxisID: "y1",
          },
        ],
      },
      options: {
        ...chartConfig,
        scales: {
          ...chartConfig.scales,
          y: {
            ...chartConfig.scales.y,
            position: "left",
            title: {
              display: true,
              text: "Impressions",
              color: gradientColor.pink,
              font: {
                weight: 600,
              },
            },
          },
          y1: {
            type: "linear",
            position: "right",
            grid: {
              drawOnChartArea: false,
            },
            title: {
              display: true,
              text: "Clicks",
              color: gradientColor.blue,
              font: {
                weight: 600,
              },
            },
            ticks: {
              color: "#6B7280",
            },
          },
        },
      },
    });
  }

  // Monthly Traffic Comparison Chart
  const monthlyCtx = document.getElementById("monthlyChart");
  if (monthlyCtx) {
    new Chart(monthlyCtx, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "2023",
            data: [
              2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000,
              4200,
            ],
            backgroundColor: "rgba(139, 92, 246, 0.3)",
            borderColor: gradientColor.purple,
            borderWidth: 2,
            borderRadius: 8,
            borderSkipped: false,
          },
          {
            label: "2024",
            data: [
              8500, 9200, 10200, 11500, 13000, 14500, 16000, 17500, 19000,
              20500, 22000, 23500,
            ],
            backgroundColor: gradientColor.purple,
            borderRadius: 8,
            borderSkipped: false,
            hoverBackgroundColor: "#7c3aed",
          },
        ],
      },
      options: {
        ...chartConfig,
        scales: {
          ...chartConfig.scales,
          x: {
            ...chartConfig.scales.x,
            stacked: false,
          },
          y: {
            ...chartConfig.scales.y,
            stacked: false,
          },
        },
      },
    });
  }
}

// Count-up animation for metric cards
function animateCountUp() {
  const metricCards = document.querySelectorAll(".metric-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = "true";
          const numberElement = entry.target.querySelector(".metric-number");
          const targetValue = parseInt(entry.target.dataset.target);
          const suffix = entry.target.dataset.suffix || "";
          const isPercentage = suffix === "%";

          // Determine increment based on target value
          const duration = 2000; // 2 seconds
          const increment = targetValue / (duration / 16); // 60fps

          let currentValue = 0;

          const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
              currentValue = targetValue;
              clearInterval(counter);
            }

            // Format the number with commas
            let displayValue = Math.floor(currentValue).toLocaleString();
            if (isPercentage) {
              numberElement.textContent = displayValue + suffix;
            } else {
              numberElement.textContent = displayValue + suffix;
            }
          }, 16); // ~60fps
        }
      });
    },
    { threshold: 0.3 },
  );

  metricCards.forEach((card) => observer.observe(card));
}

// Gallery Modal Functions
function openGalleryModal(imageSrc) {
  const modal = document.getElementById("galleryModal");
  const galleryImage = document.getElementById("galleryImage");
  galleryImage.src = imageSrc;
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeGalleryModal() {
  const modal = document.getElementById("galleryModal");
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside the image
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("galleryModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeGalleryModal();
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeGalleryModal();
    }
  });
});

// Case Study Expandable Toggle
function toggleCaseStudy(headerElement) {
  const body = headerElement.nextElementSibling;
  const isExpanded = body.classList.contains("show");

  // Close all other case studies
  document.querySelectorAll(".case-study-body").forEach((b) => {
    if (b !== body) {
      b.classList.remove("show");
      b.previousElementSibling.classList.remove("expanded");
    }
  });

  // Toggle current case study
  headerElement.classList.toggle("expanded");
  body.classList.toggle("show");
}

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuOpen = document.getElementById("mobile-menu-open");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuOpen && mobileMenu) {
    mobileMenuOpen.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Close menu when clicking a link
    const links = mobileMenu.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
});

// Scroll animations using Intersection Observer
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "slideUp 0.6s ease-out forwards";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with animation classes
  document
    .querySelectorAll("[class*='animate-'], .chart-container, .timeline-item")
    .forEach((el) => observer.observe(el));
}

// Initialize everything when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Initialize animations
  initScrollAnimations();

  // Initialize count-up animations
  setTimeout(animateCountUp, 100);

  // Initialize charts
  setTimeout(initializeCharts, 200);

  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = "smooth";

  // Lazy load images
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
          }
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
});

// Add smooth transitions for chart animations
window.addEventListener("load", () => {
  const chartCanvases = document.querySelectorAll("canvas");
  chartCanvases.forEach((canvas) => {
    canvas.style.animation = "slideUp 0.8s ease-out";
  });
});

// Optimize performance with requestAnimationFrame for scroll events
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Add scroll-based animations here if needed
      ticking = false;
    });
    ticking = true;
  }
});
