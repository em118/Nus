// Smooth fade-in animation for all cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.8s ease";

    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 200 * index); // fade each card slightly after the previous one
  });
});

// Subtle golden glow hover animation (extra shine!)
const addGlowEffect = () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 15px 30px rgba(255, 215, 0, 0.4)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.4)";
    });
  });
};

addGlowEffect();
