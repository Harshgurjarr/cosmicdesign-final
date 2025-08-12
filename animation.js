// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Check if the page is index.html
if (window.location.pathname === "/index.html") {
    // Hero Animations for the Index Page
    if (document.querySelector(".hero-content")) {
        gsap.from(".hero-content h1", { duration: 1.5, y: -50, opacity: 0 });
        gsap.from(".hero-content p", { duration: 1.5, y: 50, opacity: 0, delay: 0.3 });
        gsap.from(".btn-primary", { duration: 1.5, scale: 0.8, opacity: 0, delay: 0.6 });
    }

    // Initialize particles.js on the Index Page
    if (document.querySelector("#particles-js")) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5 },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2 },
            },
        });
    }
}

// Check if the page is shop.html
if (window.location.pathname === "/shop.html") {
    // Animations for the Shop Page
    if (document.querySelector(".product-grid")) {
        gsap.from(".products h2", {
            scrollTrigger: {
                trigger: ".products",
                start: "top 80%",
                toggleActions: "play none none none",
            },
            y: 50,
            opacity: 0,
            duration: 1,
        });

        gsap.from(".product-card", {
            scrollTrigger: {
                trigger: ".product-grid",
                start: "top 80%",
                toggleActions: "play none none none",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
        });
    }
}

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
      },
    },
    retina_detect: true,
  });
  