const els = document.querySelectorAll(".section, .card, .hero-image img");

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("reveal");
  });
}, { threshold: 0.12 });

els.forEach((el) => io.observe(el));

