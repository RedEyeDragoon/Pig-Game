// Import stylesheets
import './style.css';

//Elements 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const currentScore0El = document.querySelector('#current--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

//default board
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener("click", () => {
  //generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `https://raw.githubusercontent.com/jonasschmedtmann/complete-javascript-course/master/07-Pig-Game/starter/dice-${dice}.png`

  //check for rolled 1
  if(dice !== 1) {
    // add dice to current score 
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    // switch player
    switchPlayer();
  }
})

btnHold.addEventListener("click", () => {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).innerText = scores[activePlayer];
  switchPlayer();
})

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}