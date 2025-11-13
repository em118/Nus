// ---- Fade-in on Scroll ----
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  observer.observe(card);
});

// ---- Golden Sparkle Effect ----
cards.forEach(card => {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  card.appendChild(sparkle);

  card.addEventListener('mouseenter', () => {
    sparkle.classList.add('active');
  });

  card.addEventListener('mouseleave', () => {
    sparkle.classList.remove('active');
  });
});
