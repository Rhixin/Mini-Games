'use strict';

/*console.log(document.querySelector(`.message`).textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;*/

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector('.number').value = number;

//Again Button
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').value = number;
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//Check Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //No input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
  //Player wins
  else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //Too High
  else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //Too Low
  else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
