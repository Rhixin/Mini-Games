'use strict';

let compchoice = Math.trunc(Math.random() * 6);
let playerchoice;

let beat1 = document.querySelector('.beat1');
let beat2 = document.querySelector('.beat2');
let beat3 = document.querySelector('.beat3');
let beat4 = document.querySelector('.beat4');
let beat5 = document.querySelector('.beat5');
let beat6 = document.querySelector('.beat6');

let start = document.querySelector('.start');
let again = document.querySelector('.again');

let counter = 0;

const mouse = new Audio('mouse.wav');

beat1.addEventListener('click', function () {
  playerchoice = 0;
  playSound(audios[4]);
  userClickedPattern.push(playerchoice);
  check(userClickedPattern, compClickedPattern, counter);
  counter++;
});

beat2.addEventListener('click', function () {
  playerchoice = 1;
  playSound(audios[1]);

  userClickedPattern.push(playerchoice);
  check(userClickedPattern, compClickedPattern, counter);
  counter++;
});

beat3.addEventListener('click', function () {
  playerchoice = 2;
  playSound(audios[2]);
  userClickedPattern.push(playerchoice);
  check(userClickedPattern, compClickedPattern, counter);
  counter++;
});

beat4.addEventListener('click', function () {
  playerchoice = 3;
  playSound(audios[3]);
  userClickedPattern.push(playerchoice);
  check(userClickedPattern, compClickedPattern, counter);
  counter++;
});

beat5.addEventListener('click', function () {
  playerchoice = 4;
  playSound(audios[4]);
  userClickedPattern.push(playerchoice);
  check(userClickedPattern, compClickedPattern, counter);
  counter++;
});

beat6.addEventListener('click', function () {
  playerchoice = 5;
  playSound(audios[5]);
  userClickedPattern.push(playerchoice);
  check(userClickedPattern, compClickedPattern, counter);
  counter++;
});

again.addEventListener('click', function () {
  mouse.play();
});

let score = document.querySelector('.currentscorenumber');
let highscore = document.querySelector('.highscorenumber');
let level = document.querySelector('.currentlevelnumber');

let scorenumber = 0;
let highscorenumber = 0;
let levelnumber = 0;
let started = false;
let userClickedPattern = [];
let compClickedPattern = [];
let beats = ['beat1', 'beat2', 'beat3', 'beat4', 'beat5', 'beat6'];
let audios = ['audio1', 'audio2', 'audio3', 'audio4', 'audio5', 'audio6'];

function playSound(name) {
  var audio = new Audio(name + '.mp3');
  audio.play();
}

function playSoundEffect(name) {
  var audio = new Audio(name + '.wav');
  audio.play();
}

start.addEventListener('click', function () {
  if (!started) {
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  userClickedPattern = [];

  //Add additional pattern sa answer
  compchoice = Math.trunc(Math.random() * 6);
  compClickedPattern.push(compchoice);

  //audios[compchoice].play();

  //animate
  $('.' + beats[compchoice])
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(audios[compchoice]);
}

function check(arr1, arr2, counter) {
  if (arr1[counter] === arr2[counter]) {
    //playSound(audios[userClickedPattern[counter]]);

    if (arr1.length === arr2.length) {
      //sakto na ang round
      started = false;
      setTimeout(function () {
        nextSequence();
      }, 1000);
      scorenumber++;
      levelnumber++;
      score.textContent = scorenumber;
      level.textContent = levelnumber;
      mouse.play();
      counter = 0;
    }
  } else {
    playSoundEffect('wrong');
  }
}
