const openGiftBtn = document.getElementById("openGift");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

openGiftBtn.addEventListener("click", () => {
  popup.style.display = "flex";
  startConfetti();
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

// Confetti effect
function startConfetti() {
  const container = document.createElement('div');
  container.id = "confetti-container";
  document.body.appendChild(container);

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDelay = Math.random() * 2 + "s";
    confetti.style.backgroundColor = getRandomColor();
    container.appendChild(confetti);
  }

  setTimeout(() => {
    container.remove();
  }, 5000);
}

function getRandomColor() {
  const colors = ["#ff6f61", "#ffd700", "#90ee90", "#add8e6", "#ff69b4"];
  return colors[Math.floor(Math.random() * colors.length)];
}
