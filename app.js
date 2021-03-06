let min = 1,
  max = 10,
  winningNum = getRandomNumber(min, max);
guessesLeft = 3;

const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessButton = document.querySelector('#guess-button'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

guessButton.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max} `, 'red');
  }

  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct. YOU WIN!`);
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      gameOver(false, `Game over, you lost. Correct number was ${winningNum}.`);
    } else {
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      setMessage(
        `${guess} is not correct, ${guessesLeft} guesses left.`,
        'red'
      );
    }
  }
});

game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');

  guessInput.dissabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  guessButton.value = 'Play Again';
  guessButton.className += 'play-again';
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
