let homeScoreEl = document.getElementById("home-score"); // DOM element
let homesScore = 0; // Numeric score

function increaseHomeScoreOne() {
    homesScore += 1; // Increment the score
    homeScoreEl.textContent = homesScore; // Update the DOM
}
function increaseHomeScoreTwo() {
    homesScore += 2; // Increment the score
    homeScoreEl.textContent = homesScore; // Update the DOM
}
function increaseHomeScoreThree() {
    homesScore += 3; // Increment the score
    homeScoreEl.textContent = homesScore; // Update the DOM
}

let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0 

function increaseGuestScoreOne(){
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}
function increaseGuestScoreTwo(){
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}
function increaseGuestScoreThree(){
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}