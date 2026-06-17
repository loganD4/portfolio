<<<<<<< HEAD
const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("active-card");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("active-card");
  });
=======
const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("active-card");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("active-card");
  });
>>>>>>> 4660305 (Initial Portfolio)
});