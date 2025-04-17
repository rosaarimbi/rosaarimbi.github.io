// ===== script.js =====

const typedText = document.querySelector(".typed-text");
const phrases = [
  "Hello, I'm Rosa Arimbi 👋",
  "I'm a Software Engineer.",
  "I build Web and Desktop Apps.",
  "Let's build something together."
];

let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = "";
let isDeleting = false;

function type() {
  if (phraseIndex >= phrases.length) {
    phraseIndex = 0;
  }

  currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typedText.textContent = currentPhrase.substring(0, letterIndex--);
  } else {
    typedText.textContent = currentPhrase.substring(0, letterIndex++);
  }

  if (!isDeleting && letterIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 1200);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex++;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

window.addEventListener("DOMContentLoaded", type);

// ===== Dark Mode Toggle =====
function toggleMode() {
  document.body.classList.toggle("dark");
}
