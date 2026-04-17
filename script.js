document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnDiscover");
  const section = document.getElementById("curiosities");
  const cards = document.querySelectorAll(".card");

  function clearActiveCards() {
    cards.forEach(card => card.classList.remove("card--active"));
  }

  function getRandomCard() {
    const index = Math.floor(Math.random() * cards.length);
    return cards[index];
  }

  function highlightRandomCard() {
    clearActiveCards();
    const card = getRandomCard();
    card.classList.add("card--active");
  }

  function scrollToSection() {
    section.scrollIntoView({ behavior: "smooth" });
  }

  btn.addEventListener("click", () => {
    scrollToSection();
    highlightRandomCard();
  });
});