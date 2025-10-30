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
score0_Element.textContent = "0";
score1_Element.textContent = "0";
dice_Element.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
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
        document.getElementById(`current--${activePlayer}`).textContent = "0";
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0_Element.classList.toggle("player--active");
        player1_Element.classList.toggle("player--active");
    }
});