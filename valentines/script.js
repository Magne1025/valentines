const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const buttonsRow = document.querySelector(".buttons-row");
const card = document.querySelector(".card");

let yesClicks = 0;

function spawnHeart(x, y) {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.className = "heart-pop";
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
}

yesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  yesClicks++;

  if (yesClicks === 1) {
    response.textContent = "Are you sure you want to say Yes? 🥹";
    yesBtn.style.transform = "scale(1.5)";
    setTimeout(() => {
      yesBtn.style.transform = "";
    }, 180);
  } else if (yesClicks === 2) {
    response.textContent = "Really sure? This will make Jarmagne very happy. 💕";
    yesBtn.style.transform = "scale(1.8)";
    setTimeout(() => {
      yesBtn.style.transform = "";
    }, 200);
  } else if (yesClicks === 3) {
    response.textContent =
      "Okay, final answer: you’re really saying Yes. Best day ever! 💖";

    // biggest scale animation on final click
    yesBtn.style.transform = "scale(2.2)";
    setTimeout(() => {
      yesBtn.style.transform = "";
    }, 200);

    // burst a few hearts around the click
    const rect = yesBtn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    for (let i = 0; i < 6; i++) {
      const offsetX = (Math.random() - 0.5) * 80;
      const offsetY = (Math.random() - 0.5) * 40;
      spawnHeart(centerX + offsetX, centerY + offsetY);
    }

    // after a short delay, go to the second page
    setTimeout(() => {
      window.location.href = "yes.html";
    }, 900);
  }
});

// Make "No" hard to click: it jumps to a random place
noBtn.classList.add("playful");

function moveNoButton() {
  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = cardRect.width - btnRect.width - 16;
  const maxY = cardRect.height - btnRect.height - 16;

  const newX = Math.random() * Math.max(maxX, 0);
  const newY = Math.random() * Math.max(maxY, 0);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;

  response.textContent =
    "Hmm… looks like the universe wants you to press Yes instead. 😉";
}

noBtn.addEventListener("click", () => {
  moveNoButton();
});

