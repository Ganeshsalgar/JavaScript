let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const guessSolt = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const starOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let Prevguess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(UserInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter the valid Number.......!');
  } else if (guess < 1 && guess > 100) {
    alert('Please Enter between 1 to 100 Only .....!');
  } else {
    Prevguess.push(guess);
    if (numGuess === 11) {
      displayguess(guess);
      displayMessage(`Game is Over . Random was ${random}`);
      endGame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === random) {
    displayMessage(`Wow You Win... You Guess the Right Number ${guess}`);
    endGame();
  } else if (guess < random) {
    displayMessage(`Your Guess is TOO SMALL...`);
  } else if (guess > random) {
    displayMessage(`Your Guess is TOO HIGH`);
  }
}
function displayguess(guess) {
  UserInput.value = '';
  guessSolt.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  UserInput.value = '';
  UserInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  starOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    random = parseInt(Math.random() * 100 + 1);
    Prevguess = [];
    numGuess = 1;
    guessSolt.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    UserInput.removeAttribute('disabled');
    starOver.removeChild(p);

    playGame = true;
  });
}
