'use strict';

// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Get values from the User Input
const userInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('guessBtn');
const resetBtn = document.getElementById('resetBtn');
const resultDiv = document.getElementById('result');

function checkGuess() {
    const guess = Number(userInput.value);

    if (!guess || guess < 1 || guess > 100) {
        resultDiv.textContent = "Please enter a valid number between 1 and 100.";
        resultDiv.style.color = "red";
        return;
    }

    if (guess === randomNumber) {
        resultDiv.textContent = "Congratulations! You guessed the correct number!";
        resultDiv.style.color = "green";
        submitBtn.disabled = true;
        userInput.disabled = true;
        resetBtn.style.display = "block";
    } else if (guess < randomNumber) {
        resultDiv.textContent = "Too low! Try a higher number.";
        resultDiv.style.color = "blue";
    } else {
        resultDiv.textContent = "Too high! Try a lower number.";
        resultDiv.style.color = "blue";
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    resultDiv.textContent = "";
    userInput.value = "";
    userInput.disabled = false;
    submitBtn.disabled = false;
    resetBtn.style.display = "none";
}

submitBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', resetGame);
userInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});