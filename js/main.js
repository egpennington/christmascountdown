const countdownDisplay = document.getElementById("countdown-display")
const countdownHours = document.getElementById("countdown-hours")
const countdownMinutes = document.getElementById("countdown-minutes")
const counddownSeconds = document.getElementById("countdown-seconds")

function updateCountdown() {
    const targetDate = new Date("December 25, 2024").getTime()
    const currentDate = new Date().getTime()

    const timeDifference = targetDate - currentDate

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    countdownDisplay.textContent = days;

    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    countdownHours.innerHTML = `${hours} hours`
    
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    countdownMinutes.innerHTML = `${minutes} minutes`
    
    
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
    counddownSeconds.innerHTML = `${seconds} seconds`

    console.log(days, hours, minutes, seconds)
}

updateCountdown();

// interval to call updateCountdown every second (1000 milliseconds)
const intervalId = setInterval(updateCountdown, 1000)
