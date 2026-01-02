// Fade animation
const fades = document.querySelectorAll('.fade');
window.addEventListener('scroll', () => {
  fades.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
});

// Countdown
const eventDate = new Date("Feb 07, 2026 18:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);

  countdownEl.innerHTML = `${days} Days · ${hours} Hours · ${mins} Minutes`;
}, 1000);
