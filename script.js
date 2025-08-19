// efeito digitando
const text = "Eu te amo Lala❤";
let i = 0;
const typing = document.getElementById("typing");

function type() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 150);
  }
}
type();

// corações caindo
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 28) + "px";
  heart.style.animationDuration = (3 + Math.random() * 4) + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 400);

// tocar música
const audio = document.getElementById("bgm");
const btn = document.getElementById("playBtn");

btn.addEventListener("click", async () => {
  try {
    await audio.play();
    btn.style.display = "none";
  } catch (e) {
    console.log(e);
  }
});

// tentar autoplay (alguns celulares bloqueiam)
audio.play().then(() => btn.style.display = "none").catch(() => {});

