let min = 1,
  max = 10,
  winningNum = 2,
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
    guessInput.dissabled = true;
    guessInput.style.borderColor = 'green';
    setMessage(`${winningNum} is correct. YOU WIN!`, 'green');
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      guessInput.dissabled = true;
      guessInput.style.borderColor = 'red';
      guessButton.dissabled = true;
      setMessage(
        `Game over, you lost. Correct number was ${winningNum}.`,
        'red'
      );
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

function setMessage(messageText, colorText) {
  message.style.color = colorText;
  message.textContent = messageText;
}
