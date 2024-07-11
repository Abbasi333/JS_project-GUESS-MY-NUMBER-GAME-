'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Hello Gamer';
// // text of .message change from Start gUessing to the Hello Gamer
// console.log('======');
// console.log(document.querySelector('.message').textContent);

// //selecting number class

// document.querySelector('.number').textContent = 'No';

// //selecting score class
// document.querySelector('.score').textContent = 5000;

// console.log(`======`);
// console.log(document.querySelector('.number').textContent);
// console.log(`=======`);
// console.log(document.querySelector('.score').textContent);
// //selecting the inputr
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 30;
// console.log(document.querySelector('.guess').value);

//Handling click events
//secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//secret number
let check = document.querySelector('.check'); // select the button

// add the event listner
check.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  //when there is no guess
  if (!guess) {
    document.querySelector('.message').textContent = ' 🧐 No Number!!!';
  }
  //when the guess is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      ' 🤩 Correct Number Guess!!!';
    document.querySelector('.number').textContent = secretNumber;
    //changing background color of body
    document.querySelector('body').style.backgroundColor = '#60b347';
    //changing width of the number
    document.querySelector('.number').style.width = '30rem';
    //for highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when the guess is greater thn scretnumber or when guess is out of score
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose The Game!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // when guess is less than secret number or guess is out of score
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose The Game!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// again button functinality
const again = document.querySelector('.again');
again.addEventListener('click', function () {
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = '20';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = ' ';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
});
