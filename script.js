let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "To High try again";
        gameResult.style.color = "Red";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "To low try again";
        gameResult.style.color = "Red";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulations Ypu got it Right";
        gameResult.style.color = "yellow";
    } else {
        gameResult.textContent = "Invalid";
        gameResult.style.color = "Red";
    }
}