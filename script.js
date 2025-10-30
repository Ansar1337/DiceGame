"use strict"

// Selecting elements
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

let currentScore = 0;

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
        current0_Element.textContent = currentScore // CHANGE LATER
    } else {
        // Switch to next player

    }
});