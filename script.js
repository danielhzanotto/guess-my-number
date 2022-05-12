'use strict';

//VARIAVEIS
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 5;

let highScore = 0;
let secondPlace = 0;
let lives = 3;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// CODE
document.querySelector('.again').style.display = 'none';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess || guess > 20) {
    displayMessage('Try a number between 1 and 20');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.again').style.display = 'block';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').style.display = 'none';

    if (highScore <= score) {
      secondPlace = highScore;
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('.highscore2').textContent = secondPlace;
    } else if (secondPlace <= score && score < highScore) {
      secondPlace = score;
      document.querySelector('.highscore2').textContent = secondPlace;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      if (guess > secretNumber) {
        displayMessage('Too high!');
      } else if (score > 1) {
        displayMessage('Too low!');
      }

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      if (lives < 1) {
        document.querySelector('.number').textContent = 'GAME OVER';
        displayMessage('Please hit F5');
        document.querySelector('.again').style.display = 'none';
        document.querySelector('body').style.backgroundColor = '#FF0000';
        document.querySelector('.check').style.display = 'none';

        document.querySelector('.number').style.width = '60rem';
      } else {
        displayMessage('You just lost a life...');
        document.querySelector('.score').textContent = 0;
        lives--;
        document.querySelector('.lives').textContent = lives;
        document.querySelector('.check').style.display = 'none';
        document.querySelector('.again').style.display = 'block';
        document.querySelector('body').style.backgroundColor = '#FFA500';
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.again').style.display = 'none';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.check').style.display = 'block';
});
