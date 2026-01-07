const openBtn = document.getElementById("openLetter");
const intro = document.getElementById("intro");
const letter = document.getElementById("letter");
const music = document.getElementById("music");
const yesBtn = document.getElementById("yesBtn");

openBtn.addEventListener("click", () => {
  intro.style.display = "none";
  letter.classList.remove("hidden");

  music.volume = 0.4;
  music.play();
});

yesBtn.addEventListener("click", () => {
  window.location.href = "https://wa.me/qr/WNOGE3S6T25QM1";
});