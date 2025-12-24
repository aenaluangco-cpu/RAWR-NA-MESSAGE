function showLove() {
  document.getElementById("btn").style.display = "none";
  document.getElementById("loveMessage").style.display = "block";
}

// Floating hearts
const heartBg = document.getElementById("heart-bg");
const hearts = ["💗","💖","💕","💘","❤️"];

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 16 + Math.random() * 24 + "px";
  heart.style.animationDuration = 6 + Math.random() * 4 + "s";

  heartBg.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 400);
