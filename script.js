// LOADER
document.getElementById("loader").addEventListener("click", () => {
  document.getElementById("loader").style.display = "none";
});

// COUNTDOWN
const targetDate = new Date("2026-02-07T18:00:00").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  timer.innerHTML = `
    <div>${d}<br>Days</div>
    <div>${h}<br>Hours</div>
    <div>${m}<br>Min</div>
    <div>${s}<br>Sec</div>
  `;
}, 1000);

// PARTICLES
for (let i = 0; i < 30; i++) {
  const p = document.createElement("span");
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDelay = Math.random() * 10 + "s";
  document.getElementById("particles").appendChild(p);
}
