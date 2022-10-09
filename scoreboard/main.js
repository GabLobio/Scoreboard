let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeButton = document.getElementById("homeIncrement");
let guestButton = document.getElementById("guestIncrement");


let homeCount = 0;
let guestCount = 0;

// Home Button
function incrementByOneHome() {
    homeCount += 1;
    homeScore.textContent = homeCount;
}

function incrementByTwoHome() {
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function incrementByThreeHome() {
    homeCount += 3;
    homeScore.textContent = homeCount;
}

// Guest Button
function incrementByOneGuest() {
    guestCount += 1;
    guestScore.textContent = guestCount;
}

function incrementByTwoGuest() {
    guestCount += 2;
    guestScore.textContent = guestCount;
}

function incrementByThreeGuest() {
    guestCount += 3;
    guestScore.textContent = guestCount;
}

// reset btn
function reset() {
    homeCount = 0;
    guestCount = 0;
    guestScore.textContent = guestCount;
    homeScore.textContent = homeCount;
}

// Leader Highlighter
function highlightLeader(homeScore, guestScore) {
    if (homeScore > guestScore) {
        document.getElementById("home-score").style.borderColor = 'red';
    } else if (guestScore > homeScore) {
        document.getElementById("home-score").style.borderColor = "red";
    }
}