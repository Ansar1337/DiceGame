"use strict"

// Selecting elements
const player0_Element = document.querySelector(".player--0");
const player1_Element = document.querySelector(".player--1");
const score0_Element = document.getElementById("score--0");
const score1_Element = document.getElementById("score--1");
const current0_Element = document.getElementById("current--0");
const current1_Element = document.getElementById("current--1");
const dice_Element = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
let scores, currentScore, activePlayer, playing;

const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0_Element.textContent = "0";
    score1_Element.textContent = "0";
    current0_Element.textContent = "0";
    current1_Element.textContent = "0";

    dice_Element.classList.add("hidden");
    player0_Element.classList.remove("player--winner");
    player1_Element.classList.remove("player--winner");
    player0_Element.classList.add("player--active");
    player1_Element.classList.remove("player--active");
};

init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = "0";
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0_Element.classList.toggle("player--active");
    player1_Element.classList.toggle("player--active");
}

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
    if (playing) {
        // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Display dice
        dice_Element.classList.remove("hidden");
        dice_Element.src = `images/dice-${dice}.png`;

        // 3. Check for rolled 1
        if (dice !== 1) {
            // Add dice to current player
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener("click", function () {
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. Check if player's score is >=100
        if (scores[activePlayer] >= 100) {
            playing = false;
            dice_Element.classList.add("hidden");

            // Finish the game
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        } else {
            // 3. Switch to the next player
            switchPlayer();
        }
    }
});

btnNew.addEventListener("click", init);