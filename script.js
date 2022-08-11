'use strict';

//Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player1Section = document.querySelector('.player--0')
const player2Section = document.querySelector('.player--1')

let currentScore = 0;
let activePlayer = 0;
const scores = [0,0];

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

let playing = true;

const switchPlayer = function(){
    currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer === 0? 1 : 0;
        player1Section.classList.toggle('player--active');
        player2Section.classList.toggle('player--active');
}

//Rolling dice
btnRoll.addEventListener('click',function(){
    if(playing){
        const randomNumber = Math.floor(Math.random()*6 +1);
    
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${randomNumber}.png`;

    if(randomNumber !== 1){
        currentScore += randomNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
        switchPlayer();
               
    }
    }
    
});

btnHold.addEventListener('click',function(){
    if(playing){
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 100){
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEl.classList.add('hidden');
    }else
    switchPlayer();
    
}
});
btnNew.addEventListener('click',function(){
    location.reload();
})
