document.addEventListener("DOMContentLoaded", () => {
    // Animate hero text
    gsap.from(".hero-title", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "power2.out",
    });

    gsap.from(".hero-subtitle", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power2.out",
        delay: 0.5,
    });
});
