let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function addHomePoints(points) {
    homeScore += points
    homeScoreEl.textContent = homeScore
    console.log(homeScoreEl)
}

function addGuestPoints(points) {
    guestScore += points
    guestScoreEl.textContent = guestScore
    console.log(guestScoreEl)
}