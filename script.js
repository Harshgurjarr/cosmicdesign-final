
gsap.registerPlugin(ScrollTrigger);


particlesJS("particles-js", {
    particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2 },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
        },
    },
    retina_detect: true,
});

document.addEventListener("DOMContentLoaded", () => {
  
  const heroTitle = document.querySelector(".hero .hero-title, .hero-shop .hero-title");
  const heroSubtitle = document.querySelector(".hero .hero-subtitle, .hero-shop .hero-subtitle");

  
  if (heroTitle && heroSubtitle) {
      console.log("Hero title and subtitle detected for animation");

      
      gsap.set(heroTitle, { opacity: 0, y: -60 }); 
      gsap.set(heroSubtitle, { opacity: 0, y: 60 }); 


      gsap.to(heroTitle, {
          duration: 2,               
          y: 0,                      
          opacity: 1,                 
          ease: "power4.out",          
          stagger: 0.3,               
      });

      
      gsap.to(heroSubtitle, {
          duration: 2,                
          y: 0,                       
          opacity: 1,                
          ease: "power4.out",
          delay: 1.5,                 
      });
  } else {
      console.warn("Hero elements not found on this page");
  }
});



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
async function fetchProducts() {
    const res = await fetch('/api/products');
    const products = await res.json();
    console.log(products); 
}
fetchProducts();
const axios = require('axios');

axios.post('http://localhost:5000/api/auth/login', {
  email: 'testuser@example.com',
  password: 'password123'
})
.then(response => {
  console.log('Login successful:', response.data);
})
.catch(error => {
  console.error('Error:', error);
});
function searchProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    if (title.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
