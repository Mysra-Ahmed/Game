const sentences = [
    "Cryptographers analyze encryption algorithms under rigorous constraints.",
    "Artificial intelligence is revolutionizing industries at an unprecedented pace.",
    "Quantum mechanics challenges our classical understanding of physical reality.",
    "Programming languages evolve rapidly, adapting to new computational needs."
];
const sentenceElement = document.getElementById("sentence");
const typingInput = document.getElementById("typingInput");
const timerElement = document.getElementById("timer");
const winnerElement = document.getElementById("winner");
let timeLeft = 15;
let currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
sentenceElement.textContent = currentSentence;

let timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = Time Left: ${timeLeft}s;
    if (timeLeft === 0) {
        clearInterval(timer);
        winnerElement.textContent = "⏳ Time's up! Try again.";
    }
}, 1000);

typingInput.addEventListener("input", function() {
    if (typingInput.value === currentSentence) {
        clearInterval(timer);
        winnerElement.textContent = "🎉 You Win! 🎉";
        typingInput.style.background = "#00C9A7";
    }
});